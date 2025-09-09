import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import RESTInDjango from "@/Navigation/IndividualNav/Granularized/BackEnd/Frameworks/Django/Advanced/DjangoAndRest";
import Deployment from "@/Navigation/IndividualNav/Granularized/BackEnd/Frameworks/Django/Advanced/Deployment";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    RESTInDjango,
    Deployment
  ]
};

export default Advanced;