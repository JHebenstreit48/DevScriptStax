import type { Subpage } from '@/types/navigation';

const HTTPMethods: Subpage = {
  name: "HTTP Methods",
  subpages: [
    {
      name: "Overview",
      path: "/apis/rest/httpmethods/overview"
    },
    {
      name: "Detailed Guide",
      path: "/apis/rest/httpmethods/detailed-guide"
    },
    {
      name: "Best Practices",
      path: "/apis/rest/httpmethods/best-practices"
    },
    {
      name: "Idempotency & Safe",
      path: "/apis/rest/httpmethods/idempotency-safe"
    },
  ],
};

export default HTTPMethods;