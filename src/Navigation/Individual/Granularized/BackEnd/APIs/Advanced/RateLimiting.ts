import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const RateLimiting: Subpage = {
  name: "Rate Limiting",
  subpages: [
    {
      name: "Importance",
      path: "/apis/advanced/rate-limiting/importance",
    },
    {
      name: "Rate Limiting Techniques",
      path: "/apis/advanced/rate-limiting/strategies",
    }, // Merged two topics
    {
      name: "Handling Rate Limits as a Consumer",
      path: "/apis/advanced/rate-limiting/consumer-handling",
    },
  ],
};

export default RateLimiting;