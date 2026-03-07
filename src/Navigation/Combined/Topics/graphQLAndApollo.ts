import type { Subpage } from '@/types/navigation';

import GraphQL from '@/Navigation/Individual/Topics/GraphQLAndApollo/GraphQL';
import Apollo from '@/Navigation/Individual/Topics/GraphQLAndApollo/Apollo';

const graphQLAndApollo: Subpage = {
  name: 'GraphQL',
  subpages: [
    GraphQL,
    Apollo
  ]
};

export default graphQLAndApollo;