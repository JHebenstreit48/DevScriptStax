import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';
import GraphQLBasics from '@/Navigation/IndividualNav/Granularized/GraphQLAndApollo/GraphQLNav/Basics';
import GraphQLAdvanced from '@/Navigation/IndividualNav/Granularized/GraphQLAndApollo/GraphQLNav/Advanced';

const GraphQLNav: Subpage = {
  name: 'GraphQL',
  subpages: [
    GraphQLBasics,
    GraphQLAdvanced
  ]
};

export default GraphQLNav;