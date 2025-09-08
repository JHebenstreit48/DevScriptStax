import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from "@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/Fundamentals";
import HTTPMethods from "@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/HTTPMethods";
import EndpointsResources from "@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/EndpointsAndResources";
import DesignPrinciples from "@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/DesignPrinciples";
import ErrorHandling from "@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/ErrorHandling";

const REST: Subpage = {
    name: "REST",
    subpages: [
        Fundamentals,
        HTTPMethods,
        EndpointsResources,
        DesignPrinciples,
        ErrorHandling
    ]
};

export default REST;