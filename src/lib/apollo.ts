import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'http://13.50.234.64/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
