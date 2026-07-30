import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/BackEnd/Frameworks/NodeJs/Basics/Fundamentals';
import ModulesAndPackages from '@/routes/individual/modularized/BackEnd/Frameworks/NodeJs/Basics/ModulesAndPackages';
import Tooling from '@/routes/individual/modularized/BackEnd/Frameworks/NodeJs/Basics/Tooling';
import FilesAndStreams from '@/routes/individual/modularized/BackEnd/Frameworks/NodeJs/Basics/FilesAndStreams';
import Networking from '@/routes/individual/modularized/BackEnd/Frameworks/NodeJs/Basics/Networking';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...ModulesAndPackages,
    ...Tooling,
    ...FilesAndStreams,
    ...Networking
];

export default Basics;