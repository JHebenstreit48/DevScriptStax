import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

// ---------- Cloud Providers Navigation Start ----------

// ---------- Major Providers Navigation Start ----------
// import AWS from "@/Navigation/IndividualNav/FullTopics/CloudServices/CloudProviders/AWS";
// import GoogleCloud from "@/Navigation/IndividualNav/FullTopics/CloudServices/CloudProviders/GoogleCloud";
// import Azure from "@/Navigation/IndividualNav/FullTopics/CloudServices/CloudProviders/Azure";
// ---------- Major Providers Navigation End ----------

// ---------- Other Providers Navigation Start ----------
// import DigitalOcean from "@/Navigation/IndividualNav/FullTopics/CloudServices/CloudProviders/DigitalOcean";
// import Linode from "@/Navigation/IndividualNav/FullTopics/CloudServices/CloudProviders/Linode";
// import OracleCloud from "@/Navigation/IndividualNav/FullTopics/CloudServices/CloudProviders/OracleCloud";
// import IBMCloud from "@/Navigation/IndividualNav/FullTopics/CloudServices/CloudProviders/IBMCloud";
// import AlibabaCloud from "@/Navigation/IndividualNav/FullTopics/CloudServices/CloudProviders/AlibabaCloud";
// import Scaleway from "@/Navigation/IndividualNav/FullTopics/CloudServices/CloudProviders/Scaleway";
// import HetznerCloud from "@/Navigation/IndividualNav/FullTopics/CloudServices/CloudProviders/HetznerCloud";
// ---------- Other Providers Navigation End ----------

// ---------- Cloud Providers Navigation End ----------

const cloudProviders: Subpage = {
  name: "Cloud Providers",
  subpages: [
    {
      name: "Major Providers",
      subpages: [
        // AWS,
        // GoogleCloud,
        // Azure
      ]
    },
    {
      name: "Other Providers",
      subpages: [
        // DigitalOcean
        // , Linode
        // , OracleCloud
        // , IBMCloud
        // , AlibabaCloud
        // , Scaleway
        // , HetznerCloud
      ]
    }
  ]
};

export default cloudProviders;