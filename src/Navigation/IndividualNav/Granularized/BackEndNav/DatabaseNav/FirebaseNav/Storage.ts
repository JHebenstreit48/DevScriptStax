import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Storage: Subpage = {
  name: "Storage",
  subpages: [
    {
      name: "Overview",
      path: "/databases/firebase/storage/overview",
    },
    {
      name: "Uploading & Downloading Files",
      path: "/databases/firebase/storage/upload-download",
    },
    {
      name: "Security Rules & Access Control",
      path: "/databases/firebase/storage/security",
    },
    {
      name: "Managing Storage Costs",
      path: "/databases/firebase/storage/costs",
    },
  ],
};

export default Storage;