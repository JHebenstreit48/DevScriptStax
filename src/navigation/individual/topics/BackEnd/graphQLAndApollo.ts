import type { Subpage } from '@/types/navigation';

import GraphQL from '@/navigation/individual/topics/BackEnd/GraphQLAndApollo/GraphQL';
import Apollo from '@/navigation/individual/topics/BackEnd/GraphQLAndApollo/Apollo';

const graphQLAndApollo: Subpage = {
  name: 'GraphQL & Apollo',
  subpages: [
    GraphQL,
    Apollo
  ]
};

export default graphQLAndApollo;