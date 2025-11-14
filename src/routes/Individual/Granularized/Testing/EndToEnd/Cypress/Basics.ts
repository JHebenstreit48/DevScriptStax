import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/Individual/Granularized/Testing/EndToEnd/Cypress/Basics/Fundamentals';
import CoreCommands from '@/routes/Individual/Granularized/Testing/EndToEnd/Cypress/Basics/CoreCommands';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...CoreCommands,
];

export default Basics;