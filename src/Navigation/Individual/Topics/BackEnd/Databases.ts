import type { Subpage } from '@/types/navigation';

import MongoDB from '@/Navigation/Individual/Topics/BackEnd/Databases/MongoDB';
import Firebase from '@/Navigation/Individual/Topics/BackEnd/Databases/Firebase';
import PostgreSQL from '@/Navigation/Individual/Topics/BackEnd/Databases/PostgreSQL';
import MySQL from '@/Navigation/Individual/Topics/BackEnd/Databases/MySQL';
import Redis from '@/Navigation/Individual/Topics/BackEnd/Databases/Redis';
import SQLite from '@/Navigation/Individual/Topics/BackEnd/Databases/SQLite';

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