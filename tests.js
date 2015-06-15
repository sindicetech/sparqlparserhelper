var sparqlParserHelper = require('./sparqlparserhelper.js');
var expect = require('expect.js');

describe('Testing queries', function () {
  it('simple query', function () {
    
  var input = "SELECT * WHERE {?s <http://ddd.com> <http://ddd.com/rr>. \n ?x ?y ?z. \n ?x ?y ?z}";
  var expected = ['?s', '?x', '?y', '?z']
  var actual = sparqlParserHelper.getVariables(input);

  expect(actual).to.eql(expected);
  });
});