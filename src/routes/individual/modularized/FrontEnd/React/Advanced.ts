import { RouteObject } from "react-router-dom";

import PerformanceAndRendering from '@/routes/Individual/Granularized/FrontEnd/React/Advanced/PerformanceAndRendering';
import BestPractices from '@/routes/Individual/Granularized/FrontEnd/React/Advanced/BestPractices';
import SEOMetadata from '@/routes/Individual/Granularized/FrontEnd/React/Advanced/SEOMetadata';
import ReactTS from '@/routes/Individual/Granularized/FrontEnd/React/Advanced/ReactTS';

const Advanced: RouteObject[] = [
    ...PerformanceAndRendering,
    ...BestPractices,
    ...SEOMetadata,
    ...ReactTS
];

export default Advanced;