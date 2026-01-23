import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/GraphQLAndApollo/GraphQL/Basics/Fundamentals";
import Operations from "@/routes/Individual/Granularized/GraphQLAndApollo/GraphQL/Basics/Operations";
import SchemaAndExecution from "@/routes/Individual/Granularized/GraphQLAndApollo/GraphQL/Basics/SchemaAndExecution";
import RealTime from "@/routes/Individual/Granularized/GraphQLAndApollo/GraphQL/Basics/RealTime";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Operations,
  ...SchemaAndExecution,
  ...RealTime,
];

export default Basics;
