const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')


const typeDefs = require('./schema')

const resolvers = require('./resolvers')



main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/graphql-uas');
  }

const server = new ApolloServer({typeDefs, resolvers})

server.listen()
    .then(({url}) => {
        console.log(`Server ${url}`)
    })