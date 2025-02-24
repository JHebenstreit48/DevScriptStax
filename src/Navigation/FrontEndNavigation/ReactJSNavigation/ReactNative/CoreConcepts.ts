import { Subpage } from "@/Navigation/NavigationTypes";

const RNCoreConceptsNavigation: Subpage = {
  name: "Core Concepts",
  subpages: [
    {
      name: "Basics",
      subpages: [
        {
          name: "Components & Styling",
          path: "/react/native/coreconcepts/componentsandstyling"
        },
        {
          name: "Props & State",
          path: "/react/native/coreconcepts/propsandstate"
        },
        {
          name: "Event Handling",
          path: "/react/native/coreconcepts/eventhandling"
        }
      ]
    },
    {
      name: "Advanced Concepts",
      subpages: [
        {
          name: "Advanced Component Patterns",
          path: "/react/native/coreconcepts/advanced/componentpatterns"
        },
        {
          name: "Handling Complex State with Hooks",
          path: "/react/native/coreconcepts/advanced/complexstate"
        },
        {
          name: "Performance Considerations for Components",
          path: "/react/native/coreconcepts/advanced/performance"
        }
      ]
    },
    {
      name: "Best Practices",
      subpages: [
        {
          name: "Best Practices for Reusable Components",
          path: "/react/native/coreconcepts/best-practices/reusablecomponents"
        },
        {
          name: "Handling Props & State Effectively",
          path: "/react/native/coreconcepts/best-practices/propsandstate"
        },
        {
          name: "Code Readability & Maintainability",
          path: "/react/native/coreconcepts/best-practices/codemaintainability"
        }
      ]
    }
  ],
};

export default RNCoreConceptsNavigation;
