import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/GraphQLAndApollo/GraphQL/Basics';
import Advanced from '@/routes/individual/modularized/GraphQLAndApollo/GraphQL/Advanced';

const GraphQL: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default GraphQL;