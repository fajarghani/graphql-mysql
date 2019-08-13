'use strict';

var express = require('express')
var app = express()

var graphqlHTTP = require('express-graphql');

var schema = require('./../graphql/schema');

var resolvers = require('./../graphql/resolvers');

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}));

module.exports = app