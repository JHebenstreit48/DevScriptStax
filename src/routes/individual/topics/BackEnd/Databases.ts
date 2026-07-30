import { RouteObject } from "react-router-dom";

import Firebase from '@/routes/individual/topics/BackEnd/Databases/Firebase';
import MongoDB from '@/routes/individual/topics/BackEnd/Databases/MongoDB';
import MySQL from '@/routes/individual/topics/BackEnd/Databases/MySQL';
import PostgreSQL from '@/routes/individual/topics/BackEnd/Databases/PostgreSQL';

const Databases: RouteObject[] = [
    ...Firebase,
    ...MongoDB,
    ...MySQL,
    ...PostgreSQL
];

export default Databases;