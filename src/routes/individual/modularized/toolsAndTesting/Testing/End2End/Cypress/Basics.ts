import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/individual/modularized/toolsAndTesting/Testing/End2End/Cypress/Basics/Fundamentals';
import ProjectStructure from '@/routes/individual/modularized/toolsAndTesting/Testing/End2End/Cypress/Basics/ProjectStructure';
import Syntax from '@/routes/individual/modularized/toolsAndTesting/Testing/End2End/Cypress/Basics/Syntax';


const Basics: RouteObject[] = [
    ...Fundamentals,
    ...ProjectStructure,
    ...Syntax
];

export default Basics;