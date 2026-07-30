import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/BackEnd/APIs/RESTAPIs/Fundamentals';
import HTTPMethods from '@/navigation/individual/modularized/BackEnd/APIs/RESTAPIs/HTTPMethods';
import EndpointsResources from '@/navigation/individual/modularized/BackEnd/APIs/RESTAPIs/EndpointsAndResources';
import DesignPrinciples from '@/navigation/individual/modularized/BackEnd/APIs/RESTAPIs/DesignPrinciples';
import ErrorHandling from '@/navigation/individual/modularized/BackEnd/APIs/RESTAPIs/ErrorHandling';

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