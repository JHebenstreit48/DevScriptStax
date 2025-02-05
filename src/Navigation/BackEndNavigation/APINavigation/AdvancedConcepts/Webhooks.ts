import { Subpage } from "@/Navigation/NavigationTypes";

const WebhooksNavigation: Subpage = {
  name: "API Gateways",
  subpages: [
    {
      name: "Introduction to Webhooks",
      path: "/apis/advanced/webhooks/introduction",
    },
    {
      name: "How Webhooks Work",
      path: "/apis/advanced/webhooks/how-it-works",
    },
    {
      name: "Security Considerations for Webhooks",
      path: "/apis/advanced/webhooks/security",
    },
  ],
};

export default WebhooksNavigation;
