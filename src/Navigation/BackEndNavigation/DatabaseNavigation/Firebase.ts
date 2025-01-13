import { Subpage } from "@/Navigation/NavigationTypes";

const FirebaseNavigation: Subpage = {
  name: "Firebase",
  subpages: [
    {
      name: "Firebase",
      subpages: [
        { name: "Introduction to Firebase", path: "/databases/firebase/intro" },
        { name: "Authentication", path: "/databases/firebase/authentication" },
        { name: "Realtime Database", path: "/databases/firebase/realtime" },
        { name: "Firestore", path: "/databases/firebase/firestore" },
        { name: "Firebase Storage", path: "/databases/firebase/storage" },
      ],
    },
  ],
};

export default FirebaseNavigation;
