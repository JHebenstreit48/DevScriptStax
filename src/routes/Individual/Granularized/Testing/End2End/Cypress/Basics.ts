import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/Individual/Granularized/Testing/End2End/Cypress/Basics/Fundamentals';
import ProjectStructure from '@/routes/Individual/Granularized/Testing/End2End/Cypress/Basics/ProjectStructure';
import CoreCommands from '@/routes/Individual/Granularized/Testing/End2End/Cypress/Basics/CoreCommands';


const Basics: RouteObject[] = [
    ...Fundamentals,
    ...ProjectStructure,
    ...CoreCommands,
];

export default Basics;