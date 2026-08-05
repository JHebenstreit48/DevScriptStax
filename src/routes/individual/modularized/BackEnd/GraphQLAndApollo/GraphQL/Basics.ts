import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/BackEnd/GraphQLAndApollo/GraphQL/Basics/Fundamentals';
import Operations from '@/routes/individual/modularized/BackEnd/GraphQLAndApollo/GraphQL/Basics/Operations';
import SchemaAndExecution from '@/routes/individual/modularized/BackEnd/GraphQLAndApollo/GraphQL/Basics/SchemaAndExecution';
import RealTime from '@/routes/individual/modularized/BackEnd/GraphQLAndApollo/GraphQL/Basics/RealTime';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Operations,
  ...SchemaAndExecution,
  ...RealTime,
];

export default Basics;
