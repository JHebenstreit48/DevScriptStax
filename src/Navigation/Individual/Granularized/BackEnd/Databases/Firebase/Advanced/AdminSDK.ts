import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const AdminSDK: Subpage = {
  name: "Admin SDK (Server)",
  subpages: [
    {
      name: "Basics",
      path: "/firebase/advanced/admin-sdk/basics"
    },
    {
      name: "Server Auth & Claims",
      path: "/firebase/advanced/admin-sdk/server-auth-claims"
    },
    {
      name: "Export & Import",
      path: "/firebase/advanced/admin-sdk/export-import"
    }
  ]
};

export default AdminSDK;