import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import RESTInDjango from "@/Navigation/IndividualNav/Granularized/BackEndNav/Frameworks/Django/Advanced/DjangoAndRest";
import Deployment from "@/Navigation/IndividualNav/Granularized/BackEndNav/Frameworks/Django/Advanced/Deployment";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    RESTInDjango,
    Deployment
  ]
};

export default Advanced;