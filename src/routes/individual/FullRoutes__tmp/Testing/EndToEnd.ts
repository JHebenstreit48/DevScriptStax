import { RouteObject } from 'react-router-dom';

import Cypress from '@/routes/Individual/Granularized/Testing/End2End/Cypress/Basics';
import Playwright from '@/routes/Individual/Granularized/Testing/End2End/Playwright/Basics';

const EndToEnd: RouteObject[] = [
...Cypress,
...Playwright
];

export default EndToEnd;