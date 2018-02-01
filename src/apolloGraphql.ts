import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
})
