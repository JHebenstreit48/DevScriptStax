import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Fundamentals from "@/Navigation/Individual/Granularized/BackEnd/APIs/RESTAPIs/Fundamentals";
import HTTPMethods from "@/Navigation/Individual/Granularized/BackEnd/APIs/RESTAPIs/HTTPMethods";
import EndpointsResources from "@/Navigation/Individual/Granularized/BackEnd/APIs/RESTAPIs/EndpointsAndResources";
import DesignPrinciples from "@/Navigation/Individual/Granularized/BackEnd/APIs/RESTAPIs/DesignPrinciples";
import ErrorHandling from "@/Navigation/Individual/Granularized/BackEnd/APIs/RESTAPIs/ErrorHandling";

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