import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import APIs from '@/Navigation/Individual/FullTopics/BackEnd/APIs/APIs';

// ---------- Authentication & Authorization Navigation Start ----------
import Authorization from '@/Navigation/Individual/FullTopics/BackEnd/AuthenticationAuthorization/Authorization';
import Authentication from '@/Navigation/Individual/FullTopics/BackEnd/AuthenticationAuthorization/Authentication';
// ---------- Authentication & Authorization Navigation End ----------

// ---------- Databases Navigation Start ----------
import Firebase from '@/Navigation/Individual/FullTopics/BackEnd/Databases/Firebase';
import MongoDB from '@/Navigation/Individual/FullTopics/BackEnd/Databases/MongoDB';
import MySQL from '@/Navigation/Individual/FullTopics/BackEnd/Databases/MySQL';
import PostgreSQL from '@/Navigation/Individual/FullTopics/BackEnd/Databases/PostgreSQL';
import Redis from '@/Navigation/Individual/FullTopics/BackEnd/Databases/Redis';
import SQLite from '@/Navigation/Individual/FullTopics/BackEnd/Databases/SQLite';
// ---------- Databases Navigation End ----------

// ---------- Frameworks Navigation Start ----------
import Django from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/Django';
import ExpressJS from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/ExpressJS';
import Flask from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/Flask';
import KoaJS from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/KoaJS';
import NodeJS from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/NodeJS';
import Ruby from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/Ruby';
import Spring from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/Spring';
import WebSocket from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks/WebSocket';
// ---------- Frameworks Navigation End ----------

// ---------- Web Servers Navigation Start ----------
import General from '@/Navigation/Individual/FullTopics/BackEnd/WebServers/CoreConcepts';
import Nginx from '@/Navigation/Individual/FullTopics/BackEnd/WebServers/Nginx';
import Apache from '@/Navigation/Individual/FullTopics/BackEnd/WebServers/Apache';
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