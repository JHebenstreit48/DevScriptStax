import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/BackEnd/Frameworks/Django/Basics/Fundamentals";
import ModelsAndDB from "@/routes/Individual/Granularized/BackEnd/Frameworks/Django/Basics/ModelsAndDB";
import ViewsAndTemplates from "@/routes/Individual/Granularized/BackEnd/Frameworks/Django/Basics/ViewsAndTemplates";
import Forms from "@/routes/Individual/Granularized/BackEnd/Frameworks/Django/Basics/Forms";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...ModelsAndDB,
  ...ViewsAndTemplates,
  ...Forms,
];

export default Basics;
