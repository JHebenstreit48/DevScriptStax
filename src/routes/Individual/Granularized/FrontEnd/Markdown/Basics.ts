import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/FrontEnd/Markdown/Basics/Fundamentals';
import ContentElements from '@/routes/Individual/Granularized/FrontEnd/Markdown/Basics/ContentElements';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...ContentElements
];

export default Basics;