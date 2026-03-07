import type { Subpage } from '@/types/navigation';

import Firebase from '@/Navigation/Individual/Topics/BackEnd/Databases/Firebase';
import MongoDB from '@/Navigation/Individual/Topics/BackEnd/Databases/MongoDB';
import MySQL from '@/Navigation/Individual/Topics/BackEnd/Databases/MySQL';
import PostgreSQL from '@/Navigation/Individual/Topics/BackEnd/Databases/PostgreSQL';
import Redis from '@/Navigation/Individual/Topics/BackEnd/Databases/Redis';
import SQLite from '@/Navigation/Individual/Topics/BackEnd/Databases/SQLite';

const Databases: Subpage = {
    name: 'Databases',
    subpages: [
        Firebase,
        MongoDB,
        MySQL,
        PostgreSQL,
        Redis,
        SQLite
    ]
};

export default Databases;