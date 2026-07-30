import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/individual/modularized/Tools/Containerization/Git/Basics/Fundamentals';
import InstallAndConfig from '@/routes/individual/modularized/Tools/Containerization/Git/Basics/InstallAndConfig';
import Workflow from '@/routes/individual/modularized/Tools/Containerization/Git/Basics/Worflow';
import Commands from '@/routes/individual/modularized/Tools/Containerization/Git/Basics/Commands';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...InstallAndConfig,
    ...Workflow,
    ...Commands
];

export default Basics;