import { Subpage } from "@/Navigation/NavigationTypes";

const RNStateManagementNavigation: Subpage = {
  name: "State Management & Data Handling",
  subpages: [
    {
      name: "Managing State",
      path: "/react/native/statemanagement/managingstate"
    }, // Redux, Zustand, Context API
    {
      name: "Networking & API Calls",
      path: "/react/native/statemanagement/networking"
    }, // Fetching data from APIs
    {
      name: "Local Storage & Databases",
      path: "/react/native/statemanagement/localstorage"
    }, // AsyncStorage, SQLite, Realm DB
  ],
};

export default RNStateManagementNavigation;
