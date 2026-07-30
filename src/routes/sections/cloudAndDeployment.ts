import { RouteObject } from "react-router-dom";

import CloudServices from '@/routes/individual/topics/CloudOps/CloudServices';
// import CloudProviders from '@/routes/individual/topics/CloudAndDeployment/cloudProviders';

const cloudAndDeployment: RouteObject[] = [
  ...CloudServices,
  // ...CloudProviders,
];

export default cloudAndDeployment;