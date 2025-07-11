import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/CoreConcepts/ComponentsPages/Introduction"
    )
);
const ReusableDesign = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/CoreConcepts/ComponentsPages/ReusableDesign"
    )
);
const SmartDumb = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/CoreConcepts/ComponentsPages/SmartDumb"
    )
);
const Communication = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/CoreConcepts/ComponentsPages/Communication"
    )
);
const InputsOutputs = lazy(
  () =>
    import(
      "@/Pages/MainTabs/FrontEndPages/AngularPages/Basics/CoreConcepts/ComponentsPages/InputsOutputs"
    )
);

const Components: RouteObject[] = [
  {
    path: "/angular/basics/coreconcepts/components/introduction",
    element: <Introduction />,
  },
  {
    path: "/angular/basics/coreconcepts/components/reusabledesign",
    element: <ReusableDesign />,
  },
  {
    path: "/angular/basics/coreconcepts/components/smartdumb",
    element: <SmartDumb />,
  },
  {
    path: "/angular/basics/coreconcepts/components/communication",
    element: <Communication />,
  },
  {
    path: "/angular/basics/coreconcepts/components/inputsoutputs",
    element: <InputsOutputs />,
  }
];

export default Components;