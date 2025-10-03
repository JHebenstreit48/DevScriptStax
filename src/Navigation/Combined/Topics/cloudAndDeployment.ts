import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import cloudServices from "@/Navigation/Combined/Topics/CloudAndDeployment/cloudServices";
import cloudProviders from "@/Navigation/Combined/Topics/CloudAndDeployment/cloudProviders";

const cloudAndDeployment: Subpage = {
  name: "Cloud & Deploy",
  subpages: [
    cloudServices,
    cloudProviders
  ]
};

export default cloudAndDeployment;