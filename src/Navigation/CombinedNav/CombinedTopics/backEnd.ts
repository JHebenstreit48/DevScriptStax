import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import APIs from '@/Navigation/IndividualNav/FullTopics/BackEnd/APIs/APIs';

// ---------- Authentication & Authorization Navigation Start ----------
import Authorization from '@/Navigation/IndividualNav/FullTopics/BackEnd/AuthenticationAuthorization/Authorization';
import Authentication from '@/Navigation/IndividualNav/FullTopics/BackEnd/AuthenticationAuthorization/Authentication';
// ---------- Authentication & Authorization Navigation End ----------

// ---------- Databases Navigation Start ----------
import Firebase from '@/Navigation/IndividualNav/FullTopics/BackEnd/Databases/Firebase';
import MongoDB from '@/Navigation/IndividualNav/FullTopics/BackEnd/Databases/MongoDB';
import MySQL from '@/Navigation/IndividualNav/FullTopics/BackEnd/Databases/MySQL';
import PostgreSQL from '@/Navigation/IndividualNav/FullTopics/BackEnd/Databases/PostgreSQL';
import Redis from '@/Navigation/IndividualNav/FullTopics/BackEnd/Databases/Redis';
import SQLite from '@/Navigation/IndividualNav/FullTopics/BackEnd/Databases/SQLite';
// ---------- Databases Navigation End ----------

// ---------- Frameworks Navigation Start ----------
import Django from '@/Navigation/IndividualNav/FullTopics/BackEnd/Frameworks/Django';
import ExpressJS from '@/Navigation/IndividualNav/FullTopics/BackEnd/Frameworks/ExpressJS';
import Flask from '@/Navigation/IndividualNav/FullTopics/BackEnd/Frameworks/Flask';
import KoaJS from '@/Navigation/IndividualNav/FullTopics/BackEnd/Frameworks/KoaJS';
import NodeJS from '@/Navigation/IndividualNav/FullTopics/BackEnd/Frameworks/NodeJS';
import Ruby from '@/Navigation/IndividualNav/FullTopics/BackEnd/Frameworks/Ruby';
import Spring from '@/Navigation/IndividualNav/FullTopics/BackEnd/Frameworks/Spring';
import WebSocket from '@/Navigation/IndividualNav/FullTopics/BackEnd/Frameworks/WebSocket';
// ---------- Frameworks Navigation End ----------

// ---------- Web Servers Navigation Start ----------
import General from '@/Navigation/IndividualNav/FullTopics/BackEnd/WebServers/General';
import Nginx from '@/Navigation/IndividualNav/FullTopics/BackEnd/WebServers/Nginx';
import Apache from '@/Navigation/IndividualNav/FullTopics/BackEnd/WebServers/Apache';
// ---------- Web Servers Navigation End ----------

const backEnd: Subpage = {
  name: 'Back End',
  subpages: [
    APIs,
    {
      name: 'Authentication & Authorization',
      subpages: [
        Authentication,
        Authorization
      ]
    },
    {
      name: 'Databases',
      subpages: [
        Firebase,
        MongoDB,
        MySQL,
        PostgreSQL,
        Redis,
        SQLite
      ]
    },
    {
      name: 'Frameworks',
      subpages: [
        Django,
        ExpressJS,
        Flask,
        KoaJS,
        NodeJS,
        Ruby,
        Spring,
        WebSocket
      ]
    },
    {
      name: 'Web Servers',
      subpages: [
        General,
        Nginx,
        Apache
      ]
    }
  ]
};

export default backEnd;