import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';
import GraphQLBasics from '@/Navigation/IndividualNav/Granularized/GraphQLAndApollo/GraphQL/Basics';
import GraphQLAdvanced from '@/Navigation/IndividualNav/Granularized/GraphQLAndApollo/GraphQL/Advanced';

const GraphQL: Subpage = {
  name: 'GraphQL',
  subpages: [
    GraphQLBasics,
    GraphQLAdvanced
  ]
};

export default GraphQL;