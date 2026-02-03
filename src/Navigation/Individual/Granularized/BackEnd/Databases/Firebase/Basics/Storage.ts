import type { Subpage } from '@/types/navigation';

const Storage: Subpage = {
  name: "Storage",
  subpages: [
    {
      name: "Overview",
      path: "/firebase/basics/storage/overview",
    },
    {
      name: "Uploading & Downloading Files",
      path: "/firebase/basics/storage/upload-download",
    },
    {
      name: "Security Rules & Access Control",
      path: "/firebase/basics/storage/security",
    },
    {
      name: "Managing Storage Costs",
      path: "/firebase/basics/storage/costs",
    },
    {
      name: "Auditing & File Counts",
      path: "/firebase/basics/storage/auditing-counts",
    },
  ],
};

export default Storage;