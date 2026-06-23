import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/Individual/Granularized/Testing/End2End/Cypress/Basics/Fundamentals';
import ProjectStructure from '@/routes/Individual/Granularized/Testing/End2End/Cypress/Basics/ProjectStructure';
import Syntax from '@/routes/Individual/Granularized/Testing/End2End/Cypress/Basics/Syntax';


const Basics: RouteObject[] = [
    ...Fundamentals,
    ...ProjectStructure,
    ...Syntax
];

export default Basics;