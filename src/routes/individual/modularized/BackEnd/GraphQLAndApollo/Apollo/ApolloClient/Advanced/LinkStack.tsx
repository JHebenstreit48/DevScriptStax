import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HttpLinkAndSplit = lazy(() => import('@/pages/mainTabs/BackEnd/GraphQLAndApollo/Apollo/ApolloClient/Advanced/LinkStack/HttpLinkAndSplit'));
const AuthLinkAndContext = lazy(() => import('@/pages/mainTabs/BackEnd/GraphQLAndApollo/Apollo/ApolloClient/Advanced/LinkStack/AuthLinkAndContext'));

const LinkStack: RouteObject[] = [
  {
    path: '/apollo/client/advanced/link-stack/http-split',
    element: <HttpLinkAndSplit />,
  },
  {
    path: '/apollo/client/advanced/link-stack/auth-context',
    element: <AuthLinkAndContext />,
  },
];

export default LinkStack;
