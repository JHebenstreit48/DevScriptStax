import { RouteObject } from 'react-router-dom';

import PropsAndState from '@/routes/individual/modularized/FrontEnd/React/Basics/CoreConcepts/PropsAndState';
import JSXAndEvent from '@/routes/individual/modularized/FrontEnd/React/Basics/CoreConcepts/Fundamentals';
import Forms from '@/routes/individual/modularized/FrontEnd/React/Basics/CoreConcepts/Forms';

const CoreConcepts: RouteObject[] = [
    ...PropsAndState,
    ...JSXAndEvent,
    ...Forms
];

export default CoreConcepts;