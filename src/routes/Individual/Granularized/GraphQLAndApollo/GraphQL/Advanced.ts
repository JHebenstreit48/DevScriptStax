import { RouteObject } from "react-router-dom";

import SchemaDesign from "@/routes/Individual/Granularized/GraphQLAndApollo/GraphQL/Advanced/SchemaDesign";
import Directives from "@/routes/Individual/Granularized/GraphQLAndApollo/GraphQL/Advanced/Directives";
import Performance from "@/routes/Individual/Granularized/GraphQLAndApollo/GraphQL/Advanced/Performance";
import Composition from "@/routes/Individual/Granularized/GraphQLAndApollo/GraphQL/Advanced/Composition";

const Advanced: RouteObject[] = [
  ...SchemaDesign,
  ...Directives,
  ...Performance,
  ...Composition,
];

export default Advanced;
