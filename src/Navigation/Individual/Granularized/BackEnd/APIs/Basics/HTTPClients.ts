import type { Subpage } from "@/types/navigation";

const HTTPClients: Subpage = {
  name: "HTTP Clients",
  subpages: [
    {
      name: "Introduction",
      path: "/apis/basics/http-clients/introduction",
    },
    {
      name: "Promises & Response Handling",
      path: "/apis/basics/http-clients/promises-response-handling",
    },
    {
      name: "Axios",
      path: "/apis/basics/http-clients/axios",
    },
  ],
};

export default HTTPClients;