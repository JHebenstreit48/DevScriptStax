import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from "@/Navigation/IndividualNav/Granularized/BackEnd/APIs/RESTAPIs/Fundamentals";
import HTTPMethods from "@/Navigation/IndividualNav/Granularized/BackEnd/APIs/RESTAPIs/HTTPMethods";
import EndpointsResources from "@/Navigation/IndividualNav/Granularized/BackEnd/APIs/RESTAPIs/EndpointsAndResources";
import DesignPrinciples from "@/Navigation/IndividualNav/Granularized/BackEnd/APIs/RESTAPIs/DesignPrinciples";
import ErrorHandling from "@/Navigation/IndividualNav/Granularized/BackEnd/APIs/RESTAPIs/ErrorHandling";

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