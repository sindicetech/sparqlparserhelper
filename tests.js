var SparqlParserHelper = require('./sparqlparserhelper.js');
var expect = require('expect.js');

describe('Testing queries', function () {
  it('simple query', function () {
    var helper = new SparqlParserHelper();
    var input = "SELECT * WHERE {?s <http://ddd.com> <http://ddd.com/rr>. \n ?x ?y ?z. \n ?x ?y ?z}";
    var expected = ['?s', '?x', '?y', '?z']
    var actual = helper.getVariables(input);

    expect(actual).to.eql(expected);
  });
});
