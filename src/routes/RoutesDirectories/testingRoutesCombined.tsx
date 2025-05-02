import { RouteObject } from 'react-router-dom';

import endToEndTestingRoutes from '@/routes/Testing/TestingCombined/endToEndTesting';

const testingRoutes: RouteObject[] = [
...endToEndTestingRoutes
];

export default testingRoutes;