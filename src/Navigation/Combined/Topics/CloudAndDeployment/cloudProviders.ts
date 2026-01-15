import type { Subpage } from '@/types/navigation';

// ---------- Cloud Providers Navigation Start ----------

// ---------- Major Providers Navigation Start ----------
// import AWS from "@/Navigation/Individual/FullTopics/CloudServices/CloudProviders/AWS";
// import GoogleCloud from "@/Navigation/Individual/FullTopics/CloudServices/CloudProviders/GoogleCloud";
// import Azure from "@/Navigation/Individual/FullTopics/CloudServices/CloudProviders/Azure";
// ---------- Major Providers Navigation End ----------

// ---------- Other Providers Navigation Start ----------
// import DigitalOcean from "@/Navigation/Individual/FullTopics/CloudServices/CloudProviders/DigitalOcean";
// import Linode from "@/Navigation/Individual/FullTopics/CloudServices/CloudProviders/Linode";
// import OracleCloud from "@/Navigation/Individual/FullTopics/CloudServices/CloudProviders/OracleCloud";
// import IBMCloud from "@/Navigation/Individual/FullTopics/CloudServices/CloudProviders/IBMCloud";
// import AlibabaCloud from "@/Navigation/Individual/FullTopics/CloudServices/CloudProviders/AlibabaCloud";
// import Scaleway from "@/Navigation/Individual/FullTopics/CloudServices/CloudProviders/Scaleway";
// import HetznerCloud from "@/Navigation/Individual/FullTopics/CloudServices/CloudProviders/HetznerCloud";
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