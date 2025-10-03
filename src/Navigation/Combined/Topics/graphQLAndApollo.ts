import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import GraphQL from '@/Navigation/Individual/FullTopics/GraphQLAndApollo/GraphQL';
import Apollo from '@/Navigation/Individual/FullTopics/GraphQLAndApollo/Apollo';

const graphQLAndApollo: Subpage = {
  name: 'GraphQL & Apollo',
  subpages: [
    GraphQL,
    Apollo
  ]
};

export default graphQLAndApollo;