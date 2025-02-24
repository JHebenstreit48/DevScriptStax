import { Subpage } from "@/Navigation/NavigationTypes";

const RNStateManagementNavigation: Subpage = {
  name: "State Management & Data Handling",
  subpages: [
    {
      name: "Basics",
      subpages: [
        {
          name: "Managing State",
          path: "/react/native/statemanagement/managingstate"
        },
        {
          name: "Networking & API Calls",
          path: "/react/native/statemanagement/networking"
        },
        {
          name: "Local Storage & Databases",
          path: "/react/native/statemanagement/localstorage"
        }
      ]
    },
    {
      name: "Advanced Concepts",
      subpages: [
        {
          name: "Advanced State Management",
          path: "/react/native/statemanagement/advanced/statemanagement"
        }
      ]
    },
    {
      name: "Best Practices",
      subpages: [
        {
          name: "State Management Best Practices",
          path: "/react/native/statemanagement/best-practices"
        }
      ]
    }
  ],
};

export default RNStateManagementNavigation;
