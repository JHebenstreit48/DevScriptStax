import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const CostOptimization: Subpage = {
  name: "Cost Optimization",
  subpages: [
    {
      name: "Reads/Writes & Pricing",
      path: "/firebase/advanced/cost-optimization/pricing-read-write"
    },
    {
      name: "Storage & Bandwidth",
      path: "/firebase/advanced/cost-optimization/storage-bandwidth"
    }
  ]
};

export default CostOptimization;