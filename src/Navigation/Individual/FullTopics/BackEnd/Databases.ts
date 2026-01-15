import type { Subpage } from '@/types/navigation';

import Firebase from '@/Navigation/Individual/FullTopics/BackEnd/Databases/Firebase';
import MongoDB from '@/Navigation/Individual/FullTopics/BackEnd/Databases/MongoDB';
import MySQL from '@/Navigation/Individual/FullTopics/BackEnd/Databases/MySQL';
import PostgreSQL from '@/Navigation/Individual/FullTopics/BackEnd/Databases/PostgreSQL';
import Redis from '@/Navigation/Individual/FullTopics/BackEnd/Databases/Redis';
import SQLite from '@/Navigation/Individual/FullTopics/BackEnd/Databases/SQLite';

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