import { RouteObject } from 'react-router-dom';

import PropsAndState from '@/routes/Individual/Granularized/FrontEnd/React/Basics/CoreConcepts/PropsAndState';
import JSXAndEvent from '@/routes/Individual/Granularized/FrontEnd/React/Basics/CoreConcepts/JSXAndEvent';
import Forms from '@/routes/Individual/Granularized/FrontEnd/React/Basics/CoreConcepts/Forms';

const CoreConcepts: RouteObject[] = [
    ...PropsAndState,
    ...JSXAndEvent,
    ...Forms
];

export default CoreConcepts;