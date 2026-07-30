import { RouteObject } from "react-router-dom";

import CloudServices from '@/routes/Individual/FullRoutes/CloudOps/CloudServices';
// import CloudProviders from '@/routes/Individual/FullRoutes/CloudAndDeployment/cloudProviders';

const cloudAndDeployment: RouteObject[] = [
  ...CloudServices,
  // ...CloudProviders,
];

export default cloudAndDeployment;