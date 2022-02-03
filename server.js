const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// define a schema
// just a simple example stand in
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// https://javascript.info/

// is the database?
const rootValue = {
    hello: () => 'Hello World'
}

const app = express();
const PORT = process.env.PORT || 3000;
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue
}));
app.listen(PORT, () => console.log("server running"));