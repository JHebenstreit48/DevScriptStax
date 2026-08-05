import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/BackEnd/GraphQLAndApollo/GraphQL/Basics';
import Advanced from '@/routes/individual/modularized/BackEnd/GraphQLAndApollo/GraphQL/Advanced';

const GraphQL: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default GraphQL;