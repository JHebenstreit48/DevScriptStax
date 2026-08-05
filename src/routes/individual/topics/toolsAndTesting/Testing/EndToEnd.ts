import { RouteObject } from 'react-router-dom';

import Cypress from '@/routes/individual/modularized/toolsAndTesting/Testing/End2End/Cypress/Basics';
import Playwright from '@/routes/individual/modularized/toolsAndTesting/Testing/End2End/Playwright/Basics';

const EndToEnd: RouteObject[] = [
...Cypress,
...Playwright
];

export default EndToEnd;