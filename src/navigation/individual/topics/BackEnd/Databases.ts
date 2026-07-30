import type { Subpage } from '@/types/navigation';

import MongoDB from '@/navigation/individual/topics/BackEnd/Databases/MongoDB';
import Firebase from '@/navigation/individual/topics/BackEnd/Databases/Firebase';
import PostgreSQL from '@/navigation/individual/topics/BackEnd/Databases/PostgreSQL';
import MySQL from '@/navigation/individual/topics/BackEnd/Databases/MySQL';
import Redis from '@/navigation/individual/topics/BackEnd/Databases/Redis';
import SQLite from '@/navigation/individual/topics/BackEnd/Databases/SQLite';

const Databases: Subpage = {
    name: 'Databases',
    subpages: [
        MongoDB,
        Firebase,
        PostgreSQL,
        MySQL,
        Redis,
        SQLite
    ]
};

export default Databases;