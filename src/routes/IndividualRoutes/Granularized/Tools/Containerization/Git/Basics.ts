import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/IndividualRoutes/Granularized/Tools/Containerization/Git/Basics/Fundamentals';
import InstallAndConfig from '@/routes/IndividualRoutes/Granularized/Tools/Containerization/Git/Basics/InstallAndConfig';
import Workflow from '@/routes/IndividualRoutes/Granularized/Tools/Containerization/Git/Basics/Worflow';
import Commands from '@/routes/IndividualRoutes/Granularized/Tools/Containerization/Git/Basics/Commands';


const Basics: RouteObject[] = [
    ...Fundamentals,
    ...InstallAndConfig,
    ...Workflow,
    ...Commands
];

export default Basics;