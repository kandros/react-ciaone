import * as React from 'react'
import { Router } from './router'
import { ApolloProvider } from 'react-apollo'
import { apolloClient } from './graphql/apollo'

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Router />
      </ApolloProvider>
    )
  }
}

export default App
