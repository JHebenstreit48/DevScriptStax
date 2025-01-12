import { Subpage } from "@/Navigation/NavigationTypes";

const APIToolsNavigation: Subpage = {
  name: "API Tools",
  subpages: [
    {
      name: "Insomnia",
      subpages: [
        {
          name: "Insomnia Notes",
          path: "/tools/api/insomnia"
        },
        {
          name: "Insomnia Code Notes",
          path: "/tools/api/insomnia/insomniacode",
        },
      ],
    },
    {
      name: "Postman",
      subpages: [
        {
          name: "Postman Notes",
          path: "/tools/api/postman"
        },
        {
          name: "Postman Code Notes",
          path: "/tools/api/postman/postmancode"
        },
      ],
    },
  ],
};

export default APIToolsNavigation;
