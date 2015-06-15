// Generated from sparql/SparqlParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SparqlParser.

function SparqlParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SparqlParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SparqlParserVisitor.prototype.constructor = SparqlParserVisitor;

// Visit a parse tree produced by SparqlParser#query.
SparqlParserVisitor.prototype.visitQuery = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#prologue.
SparqlParserVisitor.prototype.visitPrologue = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#baseDecl.
SparqlParserVisitor.prototype.visitBaseDecl = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#prefixDecl.
SparqlParserVisitor.prototype.visitPrefixDecl = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#selectQuery.
SparqlParserVisitor.prototype.visitSelectQuery = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#subSelect.
SparqlParserVisitor.prototype.visitSubSelect = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#selectClause.
SparqlParserVisitor.prototype.visitSelectClause = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#selectVariables.
SparqlParserVisitor.prototype.visitSelectVariables = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#constructQuery.
SparqlParserVisitor.prototype.visitConstructQuery = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#describeQuery.
SparqlParserVisitor.prototype.visitDescribeQuery = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#askQuery.
SparqlParserVisitor.prototype.visitAskQuery = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#datasetClause.
SparqlParserVisitor.prototype.visitDatasetClause = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#whereClause.
SparqlParserVisitor.prototype.visitWhereClause = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#solutionModifier.
SparqlParserVisitor.prototype.visitSolutionModifier = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#groupClause.
SparqlParserVisitor.prototype.visitGroupClause = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#groupCondition.
SparqlParserVisitor.prototype.visitGroupCondition = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#havingClause.
SparqlParserVisitor.prototype.visitHavingClause = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#havingCondition.
SparqlParserVisitor.prototype.visitHavingCondition = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#orderClause.
SparqlParserVisitor.prototype.visitOrderClause = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#orderCondition.
SparqlParserVisitor.prototype.visitOrderCondition = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#limitOffsetClauses.
SparqlParserVisitor.prototype.visitLimitOffsetClauses = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#limitClause.
SparqlParserVisitor.prototype.visitLimitClause = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#offsetClause.
SparqlParserVisitor.prototype.visitOffsetClause = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#valuesClause.
SparqlParserVisitor.prototype.visitValuesClause = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#updateCommand.
SparqlParserVisitor.prototype.visitUpdateCommand = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#update.
SparqlParserVisitor.prototype.visitUpdate = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#load.
SparqlParserVisitor.prototype.visitLoad = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#clear.
SparqlParserVisitor.prototype.visitClear = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#drop.
SparqlParserVisitor.prototype.visitDrop = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#create.
SparqlParserVisitor.prototype.visitCreate = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#add.
SparqlParserVisitor.prototype.visitAdd = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#move.
SparqlParserVisitor.prototype.visitMove = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#copy.
SparqlParserVisitor.prototype.visitCopy = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#insertData.
SparqlParserVisitor.prototype.visitInsertData = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#deleteData.
SparqlParserVisitor.prototype.visitDeleteData = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#deleteWhere.
SparqlParserVisitor.prototype.visitDeleteWhere = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#modify.
SparqlParserVisitor.prototype.visitModify = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#deleteClause.
SparqlParserVisitor.prototype.visitDeleteClause = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#insertClause.
SparqlParserVisitor.prototype.visitInsertClause = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#usingClause.
SparqlParserVisitor.prototype.visitUsingClause = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#graphOrDefault.
SparqlParserVisitor.prototype.visitGraphOrDefault = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#graphRef.
SparqlParserVisitor.prototype.visitGraphRef = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#graphRefAll.
SparqlParserVisitor.prototype.visitGraphRefAll = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#quadPattern.
SparqlParserVisitor.prototype.visitQuadPattern = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#quadData.
SparqlParserVisitor.prototype.visitQuadData = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#quads.
SparqlParserVisitor.prototype.visitQuads = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#quadsDetails.
SparqlParserVisitor.prototype.visitQuadsDetails = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#quadsNotTriples.
SparqlParserVisitor.prototype.visitQuadsNotTriples = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#triplesTemplate.
SparqlParserVisitor.prototype.visitTriplesTemplate = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#groupGraphPattern.
SparqlParserVisitor.prototype.visitGroupGraphPattern = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#groupGraphPatternSub.
SparqlParserVisitor.prototype.visitGroupGraphPatternSub = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#groupGraphPatternSubList.
SparqlParserVisitor.prototype.visitGroupGraphPatternSubList = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#triplesBlock.
SparqlParserVisitor.prototype.visitTriplesBlock = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#graphPatternNotTriples.
SparqlParserVisitor.prototype.visitGraphPatternNotTriples = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#optionalGraphPattern.
SparqlParserVisitor.prototype.visitOptionalGraphPattern = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#graphGraphPattern.
SparqlParserVisitor.prototype.visitGraphGraphPattern = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#serviceGraphPattern.
SparqlParserVisitor.prototype.visitServiceGraphPattern = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#bind.
SparqlParserVisitor.prototype.visitBind = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#inlineData.
SparqlParserVisitor.prototype.visitInlineData = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#dataBlock.
SparqlParserVisitor.prototype.visitDataBlock = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#inlineDataOneVar.
SparqlParserVisitor.prototype.visitInlineDataOneVar = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#inlineDataFull.
SparqlParserVisitor.prototype.visitInlineDataFull = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#dataBlockValues.
SparqlParserVisitor.prototype.visitDataBlockValues = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#dataBlockValue.
SparqlParserVisitor.prototype.visitDataBlockValue = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#minusGraphPattern.
SparqlParserVisitor.prototype.visitMinusGraphPattern = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#groupOrUnionGraphPattern.
SparqlParserVisitor.prototype.visitGroupOrUnionGraphPattern = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#filter.
SparqlParserVisitor.prototype.visitFilter = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#constraint.
SparqlParserVisitor.prototype.visitConstraint = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#functionCall.
SparqlParserVisitor.prototype.visitFunctionCall = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#argList.
SparqlParserVisitor.prototype.visitArgList = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#expressionList.
SparqlParserVisitor.prototype.visitExpressionList = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#constructTemplate.
SparqlParserVisitor.prototype.visitConstructTemplate = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#constructTriples.
SparqlParserVisitor.prototype.visitConstructTriples = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#triplesSameSubject.
SparqlParserVisitor.prototype.visitTriplesSameSubject = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#propertyList.
SparqlParserVisitor.prototype.visitPropertyList = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#propertyListNotEmpty.
SparqlParserVisitor.prototype.visitPropertyListNotEmpty = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#verb.
SparqlParserVisitor.prototype.visitVerb = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#objectList.
SparqlParserVisitor.prototype.visitObjectList = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#object.
SparqlParserVisitor.prototype.visitObject = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#triplesSameSubjectPath.
SparqlParserVisitor.prototype.visitTriplesSameSubjectPath = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#propertyListPath.
SparqlParserVisitor.prototype.visitPropertyListPath = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#propertyListPathNotEmpty.
SparqlParserVisitor.prototype.visitPropertyListPathNotEmpty = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#propertyListPathNotEmptyList.
SparqlParserVisitor.prototype.visitPropertyListPathNotEmptyList = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#verbPath.
SparqlParserVisitor.prototype.visitVerbPath = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#verbSimple.
SparqlParserVisitor.prototype.visitVerbSimple = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#objectListPath.
SparqlParserVisitor.prototype.visitObjectListPath = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#objectPath.
SparqlParserVisitor.prototype.visitObjectPath = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#path.
SparqlParserVisitor.prototype.visitPath = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#pathAlternative.
SparqlParserVisitor.prototype.visitPathAlternative = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#pathSequence.
SparqlParserVisitor.prototype.visitPathSequence = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#pathElt.
SparqlParserVisitor.prototype.visitPathElt = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#pathEltOrInverse.
SparqlParserVisitor.prototype.visitPathEltOrInverse = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#pathMod.
SparqlParserVisitor.prototype.visitPathMod = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#pathPrimary.
SparqlParserVisitor.prototype.visitPathPrimary = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#pathNegatedPropertySet.
SparqlParserVisitor.prototype.visitPathNegatedPropertySet = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#pathOneInPropertySet.
SparqlParserVisitor.prototype.visitPathOneInPropertySet = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#integer.
SparqlParserVisitor.prototype.visitInteger = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#triplesNode.
SparqlParserVisitor.prototype.visitTriplesNode = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#blankNodePropertyList.
SparqlParserVisitor.prototype.visitBlankNodePropertyList = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#triplesNodePath.
SparqlParserVisitor.prototype.visitTriplesNodePath = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#blankNodePropertyListPath.
SparqlParserVisitor.prototype.visitBlankNodePropertyListPath = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#collection.
SparqlParserVisitor.prototype.visitCollection = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#collectionPath.
SparqlParserVisitor.prototype.visitCollectionPath = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#graphNode.
SparqlParserVisitor.prototype.visitGraphNode = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#graphNodePath.
SparqlParserVisitor.prototype.visitGraphNodePath = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#varOrTerm.
SparqlParserVisitor.prototype.visitVarOrTerm = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#varOrIRI.
SparqlParserVisitor.prototype.visitVarOrIRI = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#var.
SparqlParserVisitor.prototype.visitVar = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#graphTerm.
SparqlParserVisitor.prototype.visitGraphTerm = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#nil.
SparqlParserVisitor.prototype.visitNil = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#unaryMultiplicativeExpression.
SparqlParserVisitor.prototype.visitUnaryMultiplicativeExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#relationalSetExpression.
SparqlParserVisitor.prototype.visitRelationalSetExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#unaryAdditiveExpression.
SparqlParserVisitor.prototype.visitUnaryAdditiveExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#conditionalAndExpression.
SparqlParserVisitor.prototype.visitConditionalAndExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#relationalExpression.
SparqlParserVisitor.prototype.visitRelationalExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#baseExpression.
SparqlParserVisitor.prototype.visitBaseExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#conditionalOrExpression.
SparqlParserVisitor.prototype.visitConditionalOrExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#additiveExpression.
SparqlParserVisitor.prototype.visitAdditiveExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#unaryNegationExpression.
SparqlParserVisitor.prototype.visitUnaryNegationExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#unarySignedLiteralExpression.
SparqlParserVisitor.prototype.visitUnarySignedLiteralExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#multiplicativeExpression.
SparqlParserVisitor.prototype.visitMultiplicativeExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#unaryLiteralExpression.
SparqlParserVisitor.prototype.visitUnaryLiteralExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#unaryExpression.
SparqlParserVisitor.prototype.visitUnaryExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#primaryExpression.
SparqlParserVisitor.prototype.visitPrimaryExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#builtInCall.
SparqlParserVisitor.prototype.visitBuiltInCall = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#regexExpression.
SparqlParserVisitor.prototype.visitRegexExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#subStringExpression.
SparqlParserVisitor.prototype.visitSubStringExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#strReplaceExpression.
SparqlParserVisitor.prototype.visitStrReplaceExpression = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#existsFunction.
SparqlParserVisitor.prototype.visitExistsFunction = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#notExistsFunction.
SparqlParserVisitor.prototype.visitNotExistsFunction = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#aggregate.
SparqlParserVisitor.prototype.visitAggregate = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#iriRefOrFunction.
SparqlParserVisitor.prototype.visitIriRefOrFunction = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#rdfLiteral.
SparqlParserVisitor.prototype.visitRdfLiteral = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#numericLiteral.
SparqlParserVisitor.prototype.visitNumericLiteral = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#numericLiteralUnsigned.
SparqlParserVisitor.prototype.visitNumericLiteralUnsigned = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#numericLiteralPositive.
SparqlParserVisitor.prototype.visitNumericLiteralPositive = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#numericLiteralNegative.
SparqlParserVisitor.prototype.visitNumericLiteralNegative = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#booleanLiteral.
SparqlParserVisitor.prototype.visitBooleanLiteral = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#string.
SparqlParserVisitor.prototype.visitString = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#iri.
SparqlParserVisitor.prototype.visitIri = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#prefixedName.
SparqlParserVisitor.prototype.visitPrefixedName = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#blankNode.
SparqlParserVisitor.prototype.visitBlankNode = function(ctx) {
};


// Visit a parse tree produced by SparqlParser#anon.
SparqlParserVisitor.prototype.visitAnon = function(ctx) {
};



exports.SparqlParserVisitor = SparqlParserVisitor;