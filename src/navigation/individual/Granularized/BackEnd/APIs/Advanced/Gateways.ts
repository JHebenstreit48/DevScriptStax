import type { Subpage } from '@/types/navigation';

const Gateways: Subpage = {
  name: "Gateways",
  subpages: [
    {
      name: "Fundamentals",
      path: "/apis/advanced/gateways/fundamentals",
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

export default Gateways;