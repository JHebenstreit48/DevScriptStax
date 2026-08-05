import { RouteObject } from "react-router-dom";

import Tools from '@/routes/sections/toolsAndTesting/tools';
import Testing from '@/routes/sections/toolsAndTesting/testing';

const toolsAndTesting: RouteObject[] = [
    ...Tools,
    ...Testing,
];

export default toolsAndTesting;