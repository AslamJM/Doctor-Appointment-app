import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  ApolloProvider,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {WebSocketLink} from '@apollo/client/link/ws';
import {API_URL, WS_API_URL} from '../constants/ENV';
import type {PropsWithChildren} from 'react';
import {useMemo} from 'react';
import {useAuth} from '@clerk/clerk-expo';

interface Definintion {
  kind: string;
  operation?: string;
}

const ApolloProviderWrapper = ({children}: PropsWithChildren) => {
  const {getToken} = useAuth();

  const client = useMemo(() => {
    const authLink = setContext(async (_, {headers, context}) => {
      const userToken = await getToken();

      return {
        headers: {
          ...headers,
          'x-access-token': userToken,
        },
        ...context,
      };
    });

    const httpLink = createHttpLink({
      uri: API_URL,
    });

    const wsLink = new WebSocketLink({
      uri: WS_API_URL,
      options: {
        reconnect: true,
        reconnectionAttempts: 50,
        lazy: true,
        timeout: 20000,
      },
    });
    const hasSubscriptionOperation = ({query: {definitions}}: any) =>
      definitions.some(
        ({kind, operation}: Definintion) =>
          kind === 'OperationDefinition' && operation === 'subscription',
      );

    return new ApolloClient({
      link: ApolloLink.from([
        authLink,
        ApolloLink.split(hasSubscriptionOperation, wsLink, httpLink),
      ]),
      cache: new InMemoryCache(),
      queryDeduplication: false,
    });
  }, [getToken]);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
