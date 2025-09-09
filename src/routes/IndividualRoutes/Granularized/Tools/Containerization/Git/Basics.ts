import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/IndividualRoutes/Granularized/Tools/Containerization/Git/Basics/Fundamentals';
import Workflow from '@/routes/IndividualRoutes/Granularized/Tools/Containerization/Git/Basics/Worflow';
import Commands from '@/routes/IndividualRoutes/Granularized/Tools/Containerization/Git/Basics/Commands';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...Workflow,
    ...Commands
];

export default Basics;