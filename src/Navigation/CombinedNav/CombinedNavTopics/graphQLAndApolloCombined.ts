import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import GraphQLNavigation from '@/Navigation/IndividualNav/GraphQLAndApolloNavigation/GraphQLPages';
import ApolloNavigation from '@/Navigation/IndividualNav/GraphQLAndApolloNavigation/Apollo';

const graphQLAndApolloNav: Page = {
  name: 'GraphQL & Apollo',
  subpages: [GraphQLNavigation, ApolloNavigation]
};

export default graphQLAndApolloNav;
