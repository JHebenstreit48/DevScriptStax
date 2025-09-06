import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import cloudServices from "@/Navigation/CombinedNav/CombinedTopics/CloudAndDeployment/cloudServices";
import cloudProviders from "@/Navigation/CombinedNav/CombinedTopics/CloudAndDeployment/cloudProviders";

const cloudAndDeployment: Subpage = {
  name: "Cloud & Deployment",
  subpages: [
    cloudServices,
    cloudProviders
  ]
};

export default cloudAndDeployment;