import { RouteObject } from "react-router-dom";

import SchemaDesign from '@/routes/individual/modularized/BackEnd/GraphQLAndApollo/GraphQL/Advanced/SchemaDesign';
import Directives from '@/routes/individual/modularized/BackEnd/GraphQLAndApollo/GraphQL/Advanced/Directives';
import Performance from '@/routes/individual/modularized/BackEnd/GraphQLAndApollo/GraphQL/Advanced/Performance';
import Composition from '@/routes/individual/modularized/BackEnd/GraphQLAndApollo/GraphQL/Advanced/Composition';

const Advanced: RouteObject[] = [
  ...SchemaDesign,
  ...Directives,
  ...Performance,
  ...Composition,
];

export default Advanced;
