import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import GraphQL from '@/Navigation/IndividualNav/FullTopics/GraphQLAndApollo/GraphQL';
import Apollo from '@/Navigation/IndividualNav/FullTopics/GraphQLAndApollo/Apollo';

const graphQLAndApollo: Subpage = {
  name: 'GraphQL & Apollo',
  subpages: [
    GraphQL,
    Apollo
  ]
};

export default graphQLAndApollo;