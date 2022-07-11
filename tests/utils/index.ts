import { DocumentNode, GraphQLSchema } from 'graphql';
import resolversList from '../../src/resolvers';
import IContext from '../../src/types/context';
import { buildSchemaSync } from 'type-graphql';
import Container from 'typedi';
import { ApolloServer } from 'apollo-server-express';


/**
 * Integration Test Utils
 * 
 */

let appSchema: GraphQLSchema;
let defaultContext: IContext;


const apolloTestServer = ({ context = defaultContext } = {} ) => {
  if (!appSchema) {
    appSchema = buildSchemaSync({ 
      resolvers: resolversList,
      nullableByDefault: true,
      container: Container
    })
  }

  const server: ApolloServer = new ApolloServer({
    schema: appSchema,
    context,
    introspection: false
  })

  return server;
}


export const graphqlRequest = async (
 query: DocumentNode, 
 variables?: Record<string, any>,
 context?: IContext
): Promise<any> => {
  const server = apolloTestServer({ context });
  const response = await server.executeOperation({ query, variables });
  return response;
}



/**
 * E2E Testing Utils
 * 
 */

//  const startTestServer = async (server) => {

//   const app = express();
//   server.applyMiddleware({ app });
//   const httpServer = await app.listen(0);

//   const httpServer = await server.listen({ port: 0 });

//   const link = new HttpLink({
//     uri: `http://localhost:${httpServer.port}`,
//     fetch,
//   });

//   const executeOperation = ({ query, variables = {} }) =>
//     execute(link, { query, variables });

//   return {
//     link,
//     stop: () => httpServer.server.close(),
//     graphql: executeOperation,
//   };
// };

