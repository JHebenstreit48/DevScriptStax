import { RouteObject } from 'react-router-dom';

import Foundations from '@/routes/individual/modularized/BackEnd/APIs/Basics/HTTPClients/Foundations';
import Axios from '@/routes/individual/modularized/BackEnd/APIs/Basics/HTTPClients/Axios';

const HTTPClients: RouteObject[] = [
    ...Foundations,
    ...Axios,
];

export default HTTPClients;
