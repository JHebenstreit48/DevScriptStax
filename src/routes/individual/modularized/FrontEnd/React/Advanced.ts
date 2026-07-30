import { RouteObject } from "react-router-dom";

import PerformanceAndRendering from '@/routes/individual/modularized/FrontEnd/React/Advanced/PerformanceAndRendering';
import BestPractices from '@/routes/individual/modularized/FrontEnd/React/Advanced/BestPractices';
import SEOMetadata from '@/routes/individual/modularized/FrontEnd/React/Advanced/SEOMetadata';
import ReactTS from '@/routes/individual/modularized/FrontEnd/React/Advanced/ReactTS';

const Advanced: RouteObject[] = [
    ...PerformanceAndRendering,
    ...BestPractices,
    ...SEOMetadata,
    ...ReactTS
];

export default Advanced;