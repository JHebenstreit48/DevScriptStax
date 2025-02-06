import { Subpage } from "@/Navigation/NavigationTypes";

const FirebaseNavigation: Subpage = {
  name: "Firebase",
  subpages: [
    {
      name: "Firebase Fundamentals",
      subpages: [
        { name: "What is Firebase?", path: "/databases/firebase/intro/overview" },
        { name: "Firebase vs Traditional Databases", path: "/databases/firebase/intro/comparison" },
        { name: "Use Cases for Firebase", path: "/databases/firebase/intro/use-cases" },
        { name: "Setting Up a Firebase Project", path: "/databases/firebase/intro/setup" },
      ],
    },
    {
      name: "Authentication",
      subpages: [
        { name: "Firebase Auth Overview", path: "/databases/firebase/auth/overview" },
        { name: "Using Firebase Authentication", path: "/databases/firebase/auth/implementation" },
        { name: "OAuth & Social Logins", path: "/databases/firebase/auth/social-logins" },
        { name: "Managing Users & Permissions", path: "/databases/firebase/auth/user-management" },
      ],
    },
    {
      name: "Realtime Database",
      subpages: [
        { name: "Introduction to Realtime Database", path: "/databases/firebase/realtime/overview" },
        { name: "Database Structure & Rules", path: "/databases/firebase/realtime/structure" },
        { name: "Reading & Writing Data", path: "/databases/firebase/realtime/reading-writing" },
        { name: "Realtime Listeners & Syncing", path: "/databases/firebase/realtime/listeners" },
      ],
    },
    {
      name: "Firestore",
      subpages: [
        { name: "What is Firestore?", path: "/databases/firebase/firestore/overview" },
        { name: "Firestore vs Realtime Database", path: "/databases/firebase/firestore/comparison" },
        { name: "Document & Collection Model", path: "/databases/firebase/firestore/model" },
        { name: "Querying & Indexing Data", path: "/databases/firebase/firestore/querying" },
      ],
    },
    {
      name: "Firebase Storage",
      subpages: [
        { name: "Introduction to Firebase Storage", path: "/databases/firebase/storage/overview" },
        { name: "Uploading & Downloading Files", path: "/databases/firebase/storage/upload-download" },
        { name: "Security Rules & Access Control", path: "/databases/firebase/storage/security" },
        { name: "Managing Storage Costs", path: "/databases/firebase/storage/costs" },
      ],
    },
  ],
};

export default FirebaseNavigation;
