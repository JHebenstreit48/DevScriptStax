import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/Individual/Granularized/Testing/End2End/Playwright/Basics/Fundamentals';
import Authoring from '@/routes/Individual/Granularized/Testing/End2End/Playwright/Basics/Authoring';
import FixturesAndNetwork from '@/routes/Individual/Granularized/Testing/End2End/Playwright/Basics/FixturesAndNetwork';
import Running from '@/routes/Individual/Granularized/Testing/End2End/Playwright/Basics/Running';


const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Authoring,
  ...FixturesAndNetwork,
  ...Running
];

export default Basics;