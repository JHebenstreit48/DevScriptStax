import { RouteObject } from 'react-router-dom';

import Foundations from '@/routes/Individual/Granularized/BackEnd/APIs/Basics/HTTPClients/Foundations';
import Axios from '@/routes/Individual/Granularized/BackEnd/APIs/Basics/HTTPClients/Axios';

const HTTPClients: RouteObject[] = [
    ...Foundations,
    ...Axios,
];

export default HTTPClients;
