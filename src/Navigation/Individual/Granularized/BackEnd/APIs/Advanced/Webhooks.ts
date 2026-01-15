import type { Subpage } from '@/types/navigation';

const Webhooks: Subpage = {
  name: "Webhooks",
  subpages: [
    {
      name: "Introduction",
      path: "/apis/advanced/webhooks/introduction",
    },
    {
      name: "Fundamentals",
      path: "/apis/advanced/webhooks/fundamentals",
    },
    {
      name: "Security Considerations",
      path: "/apis/advanced/webhooks/security",
    },
  ],
};

export default Webhooks;