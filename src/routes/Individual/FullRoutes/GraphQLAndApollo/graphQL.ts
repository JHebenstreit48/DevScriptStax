import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/GraphQLAndApollo/GraphQL/Basics";
import Advanced from "@/routes/Individual/Granularized/GraphQLAndApollo/GraphQL/Advanced";

const GraphQL: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default GraphQL;