import type { Subpage } from '@/types/navigation';

import GraphQLBasics from '@/navigation/individual/modularized/BackEnd/GraphQLAndApollo/GraphQL/Basics';
import GraphQLAdvanced from '@/navigation/individual/modularized/BackEnd/GraphQLAndApollo/GraphQL/Advanced';

const GraphQL: Subpage = {
  name: 'GraphQL',
  subpages: [
    GraphQLBasics,
    GraphQLAdvanced
  ]
};

export default GraphQL;