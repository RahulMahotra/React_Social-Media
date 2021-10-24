const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');

const Post = require('./models/Post');
const { MONGODB } = require('./config');

const typeDefs = require('./GraphQL/typeDefs');
const resolvers = require('./GraphQL/resolvers');

const pubSub = new PubSub();

const port = process.env.PORT || 5000;

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({ req, pubSub }),
});

mongoose
	.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connected to Db');
		return server.listen({ port });
	})
	.then((res) => {
		console.log(`Server runnig at ${res.url}`);
	})
	.catch((err) => {
		console.log(err);
	});
