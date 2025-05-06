import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const RNCoreAndStateNavigation: Subpage = {
  name: "Core Concepts & State",
  subpages: [
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "Basics",
          subpages: [
            { name: "Components & Styling", path: "/react/native/coreconcepts/componentsandstyling" },
            { name: "Props & State", path: "/react/native/coreconcepts/propsandstate" },
            { name: "Event Handling", path: "/react/native/coreconcepts/eventhandling" }
          ],
        },
        {
          name: "Advanced Concepts",
          subpages: [
            { name: "Advanced Component Patterns", path: "/react/native/coreconcepts/advanced/componentpatterns" },
            { name: "Performance Considerations for Components", path: "/react/native/coreconcepts/advanced/performance" }
          ],
        },
        {
          name: "Best Practices",
          subpages: [
            { name: "Best Practices for Reusable Components", path: "/react/native/coreconcepts/best-practices/reusablecomponents" },
            { name: "Handling Props & State Effectively", path: "/react/native/coreconcepts/best-practices/propsandstate" },
            { name: "Code Readability & Maintainability", path: "/react/native/coreconcepts/best-practices/codemaintainability" }
          ],
        }
      ],
    },
    {
      name: "State Management",
      subpages: [
        {
          name: "Basics",
          subpages: [
            { name: "Managing State", path: "/react/native/statemanagement/managingstate" },
            { name: "Networking & API Calls", path: "/react/native/statemanagement/networking" },
            { name: "Local Storage & Databases", path: "/react/native/statemanagement/localstorage" }
          ],
        },
        {
          name: "Advanced Concepts",
          subpages: [
            { name: "Advanced State Management", path: "/react/native/statemanagement/advanced/statemanagement" },
            { name: "Using Context API Effectively", path: "/react/native/statemanagement/advanced/context" }
          ],
        },
        {
          name: "Best Practices",
          subpages: [
            { name: "State Management Best Practices", path: "/react/native/statemanagement/best-practices" },
            { name: "Avoiding Common State Issues", path: "/react/native/statemanagement/best-practices/common-issues" }
          ],
        }
      ],
    }
  ],
};

export default RNCoreAndStateNavigation;
