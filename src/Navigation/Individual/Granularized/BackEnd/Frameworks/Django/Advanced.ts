import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import RESTInDjango from "@/Navigation/Individual/Granularized/BackEnd/Frameworks/Django/Advanced/DjangoAndRest";
import Deployment from "@/Navigation/Individual/Granularized/BackEnd/Frameworks/Django/Advanced/Deployment";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    RESTInDjango,
    Deployment
  ]
};

export default Advanced;