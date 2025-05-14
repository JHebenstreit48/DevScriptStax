import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const APIGatewaysNavigation: Subpage = {
  name: "API Gateways",
  subpages: [
    {
      name: "What is an API Gateway?",
      path: "/apis/advanced/gateways/what-is-api-gateway",
    },
    {
      name: "Benefits of API Gateways",
      path: "/apis/advanced/gateways/benefits",
    },
    {
      name: "API Gateway Security Features",
      path: "/apis/advanced/gateways/security",
    },
  ],
};

export default APIGatewaysNavigation;
