import { Subpage } from "@/Navigation/NavigationTypes";

const PostmanNavigation: Subpage = {
  name: "Postman",
  subpages: [
    {
      name: "Postman Notes",
      path: "/tools/api/postman",
    },
    {
      name: "Postman Code Notes",
      path: "/tools/api/postman/postmancode",
    },
  ],
};

export default PostmanNavigation;
