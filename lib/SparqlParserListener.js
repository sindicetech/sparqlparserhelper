// Generated from sparql/SparqlParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SparqlParser.
function SparqlParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SparqlParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SparqlParserListener.prototype.constructor = SparqlParserListener;

// Enter a parse tree produced by SparqlParser#query.
SparqlParserListener.prototype.enterQuery = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#query.
SparqlParserListener.prototype.exitQuery = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#prologue.
SparqlParserListener.prototype.enterPrologue = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#prologue.
SparqlParserListener.prototype.exitPrologue = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#baseDecl.
SparqlParserListener.prototype.enterBaseDecl = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#baseDecl.
SparqlParserListener.prototype.exitBaseDecl = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#prefixDecl.
SparqlParserListener.prototype.enterPrefixDecl = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#prefixDecl.
SparqlParserListener.prototype.exitPrefixDecl = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#selectQuery.
SparqlParserListener.prototype.enterSelectQuery = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#selectQuery.
SparqlParserListener.prototype.exitSelectQuery = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#subSelect.
SparqlParserListener.prototype.enterSubSelect = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#subSelect.
SparqlParserListener.prototype.exitSubSelect = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#selectClause.
SparqlParserListener.prototype.enterSelectClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#selectClause.
SparqlParserListener.prototype.exitSelectClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#selectVariables.
SparqlParserListener.prototype.enterSelectVariables = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#selectVariables.
SparqlParserListener.prototype.exitSelectVariables = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#constructQuery.
SparqlParserListener.prototype.enterConstructQuery = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#constructQuery.
SparqlParserListener.prototype.exitConstructQuery = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#describeQuery.
SparqlParserListener.prototype.enterDescribeQuery = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#describeQuery.
SparqlParserListener.prototype.exitDescribeQuery = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#askQuery.
SparqlParserListener.prototype.enterAskQuery = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#askQuery.
SparqlParserListener.prototype.exitAskQuery = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#datasetClause.
SparqlParserListener.prototype.enterDatasetClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#datasetClause.
SparqlParserListener.prototype.exitDatasetClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#whereClause.
SparqlParserListener.prototype.enterWhereClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#whereClause.
SparqlParserListener.prototype.exitWhereClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#solutionModifier.
SparqlParserListener.prototype.enterSolutionModifier = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#solutionModifier.
SparqlParserListener.prototype.exitSolutionModifier = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#groupClause.
SparqlParserListener.prototype.enterGroupClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#groupClause.
SparqlParserListener.prototype.exitGroupClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#groupCondition.
SparqlParserListener.prototype.enterGroupCondition = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#groupCondition.
SparqlParserListener.prototype.exitGroupCondition = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#havingClause.
SparqlParserListener.prototype.enterHavingClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#havingClause.
SparqlParserListener.prototype.exitHavingClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#havingCondition.
SparqlParserListener.prototype.enterHavingCondition = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#havingCondition.
SparqlParserListener.prototype.exitHavingCondition = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#orderClause.
SparqlParserListener.prototype.enterOrderClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#orderClause.
SparqlParserListener.prototype.exitOrderClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#orderCondition.
SparqlParserListener.prototype.enterOrderCondition = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#orderCondition.
SparqlParserListener.prototype.exitOrderCondition = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#limitOffsetClauses.
SparqlParserListener.prototype.enterLimitOffsetClauses = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#limitOffsetClauses.
SparqlParserListener.prototype.exitLimitOffsetClauses = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#limitClause.
SparqlParserListener.prototype.enterLimitClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#limitClause.
SparqlParserListener.prototype.exitLimitClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#offsetClause.
SparqlParserListener.prototype.enterOffsetClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#offsetClause.
SparqlParserListener.prototype.exitOffsetClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#valuesClause.
SparqlParserListener.prototype.enterValuesClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#valuesClause.
SparqlParserListener.prototype.exitValuesClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#updateCommand.
SparqlParserListener.prototype.enterUpdateCommand = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#updateCommand.
SparqlParserListener.prototype.exitUpdateCommand = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#update.
SparqlParserListener.prototype.enterUpdate = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#update.
SparqlParserListener.prototype.exitUpdate = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#load.
SparqlParserListener.prototype.enterLoad = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#load.
SparqlParserListener.prototype.exitLoad = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#clear.
SparqlParserListener.prototype.enterClear = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#clear.
SparqlParserListener.prototype.exitClear = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#drop.
SparqlParserListener.prototype.enterDrop = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#drop.
SparqlParserListener.prototype.exitDrop = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#create.
SparqlParserListener.prototype.enterCreate = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#create.
SparqlParserListener.prototype.exitCreate = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#add.
SparqlParserListener.prototype.enterAdd = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#add.
SparqlParserListener.prototype.exitAdd = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#move.
SparqlParserListener.prototype.enterMove = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#move.
SparqlParserListener.prototype.exitMove = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#copy.
SparqlParserListener.prototype.enterCopy = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#copy.
SparqlParserListener.prototype.exitCopy = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#insertData.
SparqlParserListener.prototype.enterInsertData = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#insertData.
SparqlParserListener.prototype.exitInsertData = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#deleteData.
SparqlParserListener.prototype.enterDeleteData = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#deleteData.
SparqlParserListener.prototype.exitDeleteData = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#deleteWhere.
SparqlParserListener.prototype.enterDeleteWhere = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#deleteWhere.
SparqlParserListener.prototype.exitDeleteWhere = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#modify.
SparqlParserListener.prototype.enterModify = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#modify.
SparqlParserListener.prototype.exitModify = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#deleteClause.
SparqlParserListener.prototype.enterDeleteClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#deleteClause.
SparqlParserListener.prototype.exitDeleteClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#insertClause.
SparqlParserListener.prototype.enterInsertClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#insertClause.
SparqlParserListener.prototype.exitInsertClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#usingClause.
SparqlParserListener.prototype.enterUsingClause = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#usingClause.
SparqlParserListener.prototype.exitUsingClause = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#graphOrDefault.
SparqlParserListener.prototype.enterGraphOrDefault = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#graphOrDefault.
SparqlParserListener.prototype.exitGraphOrDefault = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#graphRef.
SparqlParserListener.prototype.enterGraphRef = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#graphRef.
SparqlParserListener.prototype.exitGraphRef = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#graphRefAll.
SparqlParserListener.prototype.enterGraphRefAll = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#graphRefAll.
SparqlParserListener.prototype.exitGraphRefAll = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#quadPattern.
SparqlParserListener.prototype.enterQuadPattern = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#quadPattern.
SparqlParserListener.prototype.exitQuadPattern = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#quadData.
SparqlParserListener.prototype.enterQuadData = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#quadData.
SparqlParserListener.prototype.exitQuadData = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#quads.
SparqlParserListener.prototype.enterQuads = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#quads.
SparqlParserListener.prototype.exitQuads = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#quadsDetails.
SparqlParserListener.prototype.enterQuadsDetails = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#quadsDetails.
SparqlParserListener.prototype.exitQuadsDetails = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#quadsNotTriples.
SparqlParserListener.prototype.enterQuadsNotTriples = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#quadsNotTriples.
SparqlParserListener.prototype.exitQuadsNotTriples = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#triplesTemplate.
SparqlParserListener.prototype.enterTriplesTemplate = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#triplesTemplate.
SparqlParserListener.prototype.exitTriplesTemplate = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#groupGraphPattern.
SparqlParserListener.prototype.enterGroupGraphPattern = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#groupGraphPattern.
SparqlParserListener.prototype.exitGroupGraphPattern = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#groupGraphPatternSub.
SparqlParserListener.prototype.enterGroupGraphPatternSub = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#groupGraphPatternSub.
SparqlParserListener.prototype.exitGroupGraphPatternSub = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#groupGraphPatternSubList.
SparqlParserListener.prototype.enterGroupGraphPatternSubList = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#groupGraphPatternSubList.
SparqlParserListener.prototype.exitGroupGraphPatternSubList = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#triplesBlock.
SparqlParserListener.prototype.enterTriplesBlock = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#triplesBlock.
SparqlParserListener.prototype.exitTriplesBlock = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#graphPatternNotTriples.
SparqlParserListener.prototype.enterGraphPatternNotTriples = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#graphPatternNotTriples.
SparqlParserListener.prototype.exitGraphPatternNotTriples = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#optionalGraphPattern.
SparqlParserListener.prototype.enterOptionalGraphPattern = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#optionalGraphPattern.
SparqlParserListener.prototype.exitOptionalGraphPattern = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#graphGraphPattern.
SparqlParserListener.prototype.enterGraphGraphPattern = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#graphGraphPattern.
SparqlParserListener.prototype.exitGraphGraphPattern = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#serviceGraphPattern.
SparqlParserListener.prototype.enterServiceGraphPattern = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#serviceGraphPattern.
SparqlParserListener.prototype.exitServiceGraphPattern = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#bind.
SparqlParserListener.prototype.enterBind = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#bind.
SparqlParserListener.prototype.exitBind = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#inlineData.
SparqlParserListener.prototype.enterInlineData = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#inlineData.
SparqlParserListener.prototype.exitInlineData = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#dataBlock.
SparqlParserListener.prototype.enterDataBlock = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#dataBlock.
SparqlParserListener.prototype.exitDataBlock = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#inlineDataOneVar.
SparqlParserListener.prototype.enterInlineDataOneVar = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#inlineDataOneVar.
SparqlParserListener.prototype.exitInlineDataOneVar = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#inlineDataFull.
SparqlParserListener.prototype.enterInlineDataFull = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#inlineDataFull.
SparqlParserListener.prototype.exitInlineDataFull = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#dataBlockValues.
SparqlParserListener.prototype.enterDataBlockValues = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#dataBlockValues.
SparqlParserListener.prototype.exitDataBlockValues = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#dataBlockValue.
SparqlParserListener.prototype.enterDataBlockValue = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#dataBlockValue.
SparqlParserListener.prototype.exitDataBlockValue = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#minusGraphPattern.
SparqlParserListener.prototype.enterMinusGraphPattern = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#minusGraphPattern.
SparqlParserListener.prototype.exitMinusGraphPattern = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#groupOrUnionGraphPattern.
SparqlParserListener.prototype.enterGroupOrUnionGraphPattern = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#groupOrUnionGraphPattern.
SparqlParserListener.prototype.exitGroupOrUnionGraphPattern = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#filter.
SparqlParserListener.prototype.enterFilter = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#filter.
SparqlParserListener.prototype.exitFilter = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#constraint.
SparqlParserListener.prototype.enterConstraint = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#constraint.
SparqlParserListener.prototype.exitConstraint = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#functionCall.
SparqlParserListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#functionCall.
SparqlParserListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#argList.
SparqlParserListener.prototype.enterArgList = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#argList.
SparqlParserListener.prototype.exitArgList = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#expressionList.
SparqlParserListener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#expressionList.
SparqlParserListener.prototype.exitExpressionList = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#constructTemplate.
SparqlParserListener.prototype.enterConstructTemplate = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#constructTemplate.
SparqlParserListener.prototype.exitConstructTemplate = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#constructTriples.
SparqlParserListener.prototype.enterConstructTriples = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#constructTriples.
SparqlParserListener.prototype.exitConstructTriples = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#triplesSameSubject.
SparqlParserListener.prototype.enterTriplesSameSubject = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#triplesSameSubject.
SparqlParserListener.prototype.exitTriplesSameSubject = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#propertyList.
SparqlParserListener.prototype.enterPropertyList = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#propertyList.
SparqlParserListener.prototype.exitPropertyList = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#propertyListNotEmpty.
SparqlParserListener.prototype.enterPropertyListNotEmpty = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#propertyListNotEmpty.
SparqlParserListener.prototype.exitPropertyListNotEmpty = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#verb.
SparqlParserListener.prototype.enterVerb = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#verb.
SparqlParserListener.prototype.exitVerb = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#objectList.
SparqlParserListener.prototype.enterObjectList = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#objectList.
SparqlParserListener.prototype.exitObjectList = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#object.
SparqlParserListener.prototype.enterObject = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#object.
SparqlParserListener.prototype.exitObject = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#triplesSameSubjectPath.
SparqlParserListener.prototype.enterTriplesSameSubjectPath = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#triplesSameSubjectPath.
SparqlParserListener.prototype.exitTriplesSameSubjectPath = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#propertyListPath.
SparqlParserListener.prototype.enterPropertyListPath = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#propertyListPath.
SparqlParserListener.prototype.exitPropertyListPath = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#propertyListPathNotEmpty.
SparqlParserListener.prototype.enterPropertyListPathNotEmpty = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#propertyListPathNotEmpty.
SparqlParserListener.prototype.exitPropertyListPathNotEmpty = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#propertyListPathNotEmptyList.
SparqlParserListener.prototype.enterPropertyListPathNotEmptyList = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#propertyListPathNotEmptyList.
SparqlParserListener.prototype.exitPropertyListPathNotEmptyList = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#verbPath.
SparqlParserListener.prototype.enterVerbPath = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#verbPath.
SparqlParserListener.prototype.exitVerbPath = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#verbSimple.
SparqlParserListener.prototype.enterVerbSimple = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#verbSimple.
SparqlParserListener.prototype.exitVerbSimple = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#objectListPath.
SparqlParserListener.prototype.enterObjectListPath = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#objectListPath.
SparqlParserListener.prototype.exitObjectListPath = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#objectPath.
SparqlParserListener.prototype.enterObjectPath = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#objectPath.
SparqlParserListener.prototype.exitObjectPath = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#path.
SparqlParserListener.prototype.enterPath = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#path.
SparqlParserListener.prototype.exitPath = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#pathAlternative.
SparqlParserListener.prototype.enterPathAlternative = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#pathAlternative.
SparqlParserListener.prototype.exitPathAlternative = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#pathSequence.
SparqlParserListener.prototype.enterPathSequence = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#pathSequence.
SparqlParserListener.prototype.exitPathSequence = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#pathElt.
SparqlParserListener.prototype.enterPathElt = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#pathElt.
SparqlParserListener.prototype.exitPathElt = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#pathEltOrInverse.
SparqlParserListener.prototype.enterPathEltOrInverse = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#pathEltOrInverse.
SparqlParserListener.prototype.exitPathEltOrInverse = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#pathMod.
SparqlParserListener.prototype.enterPathMod = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#pathMod.
SparqlParserListener.prototype.exitPathMod = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#pathPrimary.
SparqlParserListener.prototype.enterPathPrimary = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#pathPrimary.
SparqlParserListener.prototype.exitPathPrimary = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#pathNegatedPropertySet.
SparqlParserListener.prototype.enterPathNegatedPropertySet = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#pathNegatedPropertySet.
SparqlParserListener.prototype.exitPathNegatedPropertySet = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#pathOneInPropertySet.
SparqlParserListener.prototype.enterPathOneInPropertySet = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#pathOneInPropertySet.
SparqlParserListener.prototype.exitPathOneInPropertySet = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#integer.
SparqlParserListener.prototype.enterInteger = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#integer.
SparqlParserListener.prototype.exitInteger = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#triplesNode.
SparqlParserListener.prototype.enterTriplesNode = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#triplesNode.
SparqlParserListener.prototype.exitTriplesNode = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#blankNodePropertyList.
SparqlParserListener.prototype.enterBlankNodePropertyList = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#blankNodePropertyList.
SparqlParserListener.prototype.exitBlankNodePropertyList = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#triplesNodePath.
SparqlParserListener.prototype.enterTriplesNodePath = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#triplesNodePath.
SparqlParserListener.prototype.exitTriplesNodePath = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#blankNodePropertyListPath.
SparqlParserListener.prototype.enterBlankNodePropertyListPath = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#blankNodePropertyListPath.
SparqlParserListener.prototype.exitBlankNodePropertyListPath = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#collection.
SparqlParserListener.prototype.enterCollection = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#collection.
SparqlParserListener.prototype.exitCollection = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#collectionPath.
SparqlParserListener.prototype.enterCollectionPath = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#collectionPath.
SparqlParserListener.prototype.exitCollectionPath = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#graphNode.
SparqlParserListener.prototype.enterGraphNode = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#graphNode.
SparqlParserListener.prototype.exitGraphNode = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#graphNodePath.
SparqlParserListener.prototype.enterGraphNodePath = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#graphNodePath.
SparqlParserListener.prototype.exitGraphNodePath = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#varOrTerm.
SparqlParserListener.prototype.enterVarOrTerm = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#varOrTerm.
SparqlParserListener.prototype.exitVarOrTerm = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#varOrIRI.
SparqlParserListener.prototype.enterVarOrIRI = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#varOrIRI.
SparqlParserListener.prototype.exitVarOrIRI = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#var.
SparqlParserListener.prototype.enterVar = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#var.
SparqlParserListener.prototype.exitVar = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#graphTerm.
SparqlParserListener.prototype.enterGraphTerm = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#graphTerm.
SparqlParserListener.prototype.exitGraphTerm = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#nil.
SparqlParserListener.prototype.enterNil = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#nil.
SparqlParserListener.prototype.exitNil = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#unaryMultiplicativeExpression.
SparqlParserListener.prototype.enterUnaryMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#unaryMultiplicativeExpression.
SparqlParserListener.prototype.exitUnaryMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#relationalSetExpression.
SparqlParserListener.prototype.enterRelationalSetExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#relationalSetExpression.
SparqlParserListener.prototype.exitRelationalSetExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#unaryAdditiveExpression.
SparqlParserListener.prototype.enterUnaryAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#unaryAdditiveExpression.
SparqlParserListener.prototype.exitUnaryAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#conditionalAndExpression.
SparqlParserListener.prototype.enterConditionalAndExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#conditionalAndExpression.
SparqlParserListener.prototype.exitConditionalAndExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#relationalExpression.
SparqlParserListener.prototype.enterRelationalExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#relationalExpression.
SparqlParserListener.prototype.exitRelationalExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#baseExpression.
SparqlParserListener.prototype.enterBaseExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#baseExpression.
SparqlParserListener.prototype.exitBaseExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#conditionalOrExpression.
SparqlParserListener.prototype.enterConditionalOrExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#conditionalOrExpression.
SparqlParserListener.prototype.exitConditionalOrExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#additiveExpression.
SparqlParserListener.prototype.enterAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#additiveExpression.
SparqlParserListener.prototype.exitAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#unaryNegationExpression.
SparqlParserListener.prototype.enterUnaryNegationExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#unaryNegationExpression.
SparqlParserListener.prototype.exitUnaryNegationExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#unarySignedLiteralExpression.
SparqlParserListener.prototype.enterUnarySignedLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#unarySignedLiteralExpression.
SparqlParserListener.prototype.exitUnarySignedLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#multiplicativeExpression.
SparqlParserListener.prototype.enterMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#multiplicativeExpression.
SparqlParserListener.prototype.exitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#unaryLiteralExpression.
SparqlParserListener.prototype.enterUnaryLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#unaryLiteralExpression.
SparqlParserListener.prototype.exitUnaryLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#unaryExpression.
SparqlParserListener.prototype.enterUnaryExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#unaryExpression.
SparqlParserListener.prototype.exitUnaryExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#primaryExpression.
SparqlParserListener.prototype.enterPrimaryExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#primaryExpression.
SparqlParserListener.prototype.exitPrimaryExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#builtInCall.
SparqlParserListener.prototype.enterBuiltInCall = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#builtInCall.
SparqlParserListener.prototype.exitBuiltInCall = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#regexExpression.
SparqlParserListener.prototype.enterRegexExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#regexExpression.
SparqlParserListener.prototype.exitRegexExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#subStringExpression.
SparqlParserListener.prototype.enterSubStringExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#subStringExpression.
SparqlParserListener.prototype.exitSubStringExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#strReplaceExpression.
SparqlParserListener.prototype.enterStrReplaceExpression = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#strReplaceExpression.
SparqlParserListener.prototype.exitStrReplaceExpression = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#existsFunction.
SparqlParserListener.prototype.enterExistsFunction = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#existsFunction.
SparqlParserListener.prototype.exitExistsFunction = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#notExistsFunction.
SparqlParserListener.prototype.enterNotExistsFunction = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#notExistsFunction.
SparqlParserListener.prototype.exitNotExistsFunction = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#aggregate.
SparqlParserListener.prototype.enterAggregate = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#aggregate.
SparqlParserListener.prototype.exitAggregate = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#iriRefOrFunction.
SparqlParserListener.prototype.enterIriRefOrFunction = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#iriRefOrFunction.
SparqlParserListener.prototype.exitIriRefOrFunction = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#rdfLiteral.
SparqlParserListener.prototype.enterRdfLiteral = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#rdfLiteral.
SparqlParserListener.prototype.exitRdfLiteral = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#numericLiteral.
SparqlParserListener.prototype.enterNumericLiteral = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#numericLiteral.
SparqlParserListener.prototype.exitNumericLiteral = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#numericLiteralUnsigned.
SparqlParserListener.prototype.enterNumericLiteralUnsigned = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#numericLiteralUnsigned.
SparqlParserListener.prototype.exitNumericLiteralUnsigned = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#numericLiteralPositive.
SparqlParserListener.prototype.enterNumericLiteralPositive = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#numericLiteralPositive.
SparqlParserListener.prototype.exitNumericLiteralPositive = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#numericLiteralNegative.
SparqlParserListener.prototype.enterNumericLiteralNegative = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#numericLiteralNegative.
SparqlParserListener.prototype.exitNumericLiteralNegative = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#booleanLiteral.
SparqlParserListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#booleanLiteral.
SparqlParserListener.prototype.exitBooleanLiteral = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#string.
SparqlParserListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#string.
SparqlParserListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#iri.
SparqlParserListener.prototype.enterIri = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#iri.
SparqlParserListener.prototype.exitIri = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#prefixedName.
SparqlParserListener.prototype.enterPrefixedName = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#prefixedName.
SparqlParserListener.prototype.exitPrefixedName = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#blankNode.
SparqlParserListener.prototype.enterBlankNode = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#blankNode.
SparqlParserListener.prototype.exitBlankNode = function(ctx) {
};


// Enter a parse tree produced by SparqlParser#anon.
SparqlParserListener.prototype.enterAnon = function(ctx) {
};

// Exit a parse tree produced by SparqlParser#anon.
SparqlParserListener.prototype.exitAnon = function(ctx) {
};



exports.SparqlParserListener = SparqlParserListener;
