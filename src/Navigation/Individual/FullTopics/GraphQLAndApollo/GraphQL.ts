import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';
import GraphQLBasics from '@/Navigation/Individual/Granularized/GraphQLAndApollo/GraphQL/Basics';
import GraphQLAdvanced from '@/Navigation/Individual/Granularized/GraphQLAndApollo/GraphQL/Advanced';

const GraphQL: Subpage = {
  name: 'GraphQL',
  subpages: [
    GraphQLBasics,
    GraphQLAdvanced
  ]
};

export default GraphQL;