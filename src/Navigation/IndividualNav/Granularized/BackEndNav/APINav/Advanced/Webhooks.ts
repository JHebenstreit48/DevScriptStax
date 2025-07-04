import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Webhooks: Subpage = {
  name: "Webhooks",
  subpages: [
    {
      name: "Introduction",
      path: "/apis/advanced/webhooks/introduction",
    },
    {
      name: "How Webhooks Work",
      path: "/apis/advanced/webhooks/how-it-works",
    },
    {
      name: "Security Considerations",
      path: "/apis/advanced/webhooks/security",
    },
  ],
};

export default Webhooks;
