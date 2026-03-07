import type { Subpage } from '@/types/navigation';

// ---------- Cloud Providers Navigation Start ----------

// ---------- Major Providers Navigation Start ----------
// import AWS from "@/Navigation/Individual/Topics/CloudServices/CloudProviders/AWS";
// import GoogleCloud from "@/Navigation/Individual/Topics/CloudServices/CloudProviders/GoogleCloud";
// import Azure from "@/Navigation/Individual/Topics/CloudServices/CloudProviders/Azure";
// ---------- Major Providers Navigation End ----------

// ---------- Other Providers Navigation Start ----------
// import DigitalOcean from "@/Navigation/Individual/Topics/CloudServices/CloudProviders/DigitalOcean";
// import Linode from "@/Navigation/Individual/Topics/CloudServices/CloudProviders/Linode";
// import OracleCloud from "@/Navigation/Individual/Topics/CloudServices/CloudProviders/OracleCloud";
// import IBMCloud from "@/Navigation/Individual/Topics/CloudServices/CloudProviders/IBMCloud";
// import AlibabaCloud from "@/Navigation/Individual/Topics/CloudServices/CloudProviders/AlibabaCloud";
// import Scaleway from "@/Navigation/Individual/Topics/CloudServices/CloudProviders/Scaleway";
// import HetznerCloud from "@/Navigation/Individual/Topics/CloudServices/CloudProviders/HetznerCloud";
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