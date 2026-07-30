import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/BackEnd/Frameworks/NodeJs/Basics/Fundamentals';
import ModulesAndPackages from '@/routes/Individual/Granularized/BackEnd/Frameworks/NodeJs/Basics/ModulesAndPackages';
import Tooling from '@/routes/Individual/Granularized/BackEnd/Frameworks/NodeJs/Basics/Tooling';
import FilesAndStreams from '@/routes/Individual/Granularized/BackEnd/Frameworks/NodeJs/Basics/FilesAndStreams';
import Networking from '@/routes/Individual/Granularized/BackEnd/Frameworks/NodeJs/Basics/Networking';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...ModulesAndPackages,
    ...Tooling,
    ...FilesAndStreams,
    ...Networking
];

export default Basics;