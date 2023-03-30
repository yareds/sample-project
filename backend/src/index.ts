
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';


//APOLLO-SERVER ( server configuration )
const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});


//APOLLO-SERVER ( running server )
server.listen().then(({ url }: { url: string }) => {
    console.log(`🚀 Server ready at ${url}`);
});