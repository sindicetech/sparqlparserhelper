(function() {

  var _ = require('underscore');
  var antlr4 = require('antlr4');
  var SparqlLexer = require('./lib/SparqlLexer.js');
  var SparqlParser = require('./lib/SparqlParser.js');
  var SparqlParserListener = require('./lib/SparqlParserListener');

  function SparqlParserHelper () {}

  SparqlParserHelper.prototype = (function(){

    //
    // PRIVATE methods
    //
    var VariableNamePrinter = function(query) {
      SparqlParserListener.SparqlParserListener.call(this); // inherit default listener
      this.selectRegister = [];
      this.whereRegister = [];
      this.query = query;
      this.inSelect = false;
      this.inWhere = false;
      return this;
    };

    // inherit default listener
    VariableNamePrinter.prototype = Object.create(SparqlParserListener.SparqlParserListener.prototype);
    VariableNamePrinter.prototype.constructor = VariableNamePrinter;

    VariableNamePrinter.prototype.exitVar = function(ctx) {
      var start = ctx.start.start;
      var stop  = ctx.start.stop;
      if (this.inSelect) {
        this.selectRegister.push(this.query.substring(start, stop + 1))
      } else if (this.inWhere) {
        this.whereRegister.push(this.query.substring(start, stop + 1))
      }
    };

    VariableNamePrinter.prototype.enterSelectVariables = function (ctx) {this.inSelect = true;};
    VariableNamePrinter.prototype.exitSelectVariables  = function (ctx) {this.inSelect = false;};
    VariableNamePrinter.prototype.enterWhereClause = function (ctx) {this.inWhere = true;};
    VariableNamePrinter.prototype.exitWhereClause  = function (ctx) {this.inWhere = false;};

    //
    // PUBLIC METHODS
    //

    return {
      /**
      * Goto goes to the element located at path, and calls the callback
      * cb once there with that element as argument.
      * The path is an array.
      */
      getVariables: function (query) {
        var chars = new antlr4.InputStream(query);
        var lexer = new SparqlLexer.SparqlLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new SparqlParser.SparqlParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.query();

        var printer = new VariableNamePrinter(query);
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);

        var varFromSelect = _.uniq(printer.selectRegister);
        if (varFromSelect.length > 0) {
          return varFromSelect;
        }
        return _.uniq(printer.whereRegister)
      }
    }

  })();

  module.exports = SparqlParserHelper;

})();
