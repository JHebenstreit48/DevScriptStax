import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import APIsNav from '@/Navigation/IndividualNav/FullTopics/BackEndNav/APIs';

// ---------- Authentication & Authorization Navigation Start ----------
// import Authorization from '@/Navigation/IndividualNav/BackEndNav/AuthenAndAuthor/Authorization';
// import Authentication from '@/Navigation/IndividualNav/BackEndNav/AuthenAndAuthor/Authentication';
// ---------- Authentication & Authorization Navigation End ----------

// ---------- Databases Navigation Start ----------
import Firebase from '@/Navigation/IndividualNav/FullTopics/BackEndNav/DatabaseNav/Firebase';
import MongoDB from '@/Navigation/IndividualNav/FullTopics/BackEndNav/DatabaseNav/MongoDB';
import MySQL from '@/Navigation/IndividualNav/FullTopics/BackEndNav/DatabaseNav/MySQL';
import PostgreSQL from '@/Navigation/IndividualNav/FullTopics/BackEndNav/DatabaseNav/PostgreSQL';
import Redis from '@/Navigation/IndividualNav/FullTopics/BackEndNav/DatabaseNav/Redis';
import SQLite from '@/Navigation/IndividualNav/FullTopics/BackEndNav/DatabaseNav/SQLite';
// ---------- Databases Navigation End ----------

// ---------- Frameworks Navigation Start ----------
// import Django from '@/Navigation/IndividualNav/BackEndNav/Frameworks/Django';
// import ExpressJS from '@/Navigation/IndividualNav/BackEndNav/Frameworks/ExpressJS';
// import Flask from '@/Navigation/IndividualNav/BackEndNav/Frameworks/Flask';
// import KoaJS from '@/Navigation/IndividualNav/BackEndNav/Frameworks/KoaJS';
// import MERN from '@/Navigation/IndividualNav/BackEndNav/Frameworks/MERN';
// import NodeJS from '@/Navigation/IndividualNav/BackEndNav/Frameworks/NodeJS';
// import Ruby from '@/Navigation/IndividualNav/BackEndNav/Frameworks/Ruby';
// import SpringBoot from '@/Navigation/IndividualNav/BackEndNav/Frameworks/SpringBoot';
// import WebSockets from '@/Navigation/IndividualNav/BackEndNav/Frameworks/WebSockets';
// ---------- Frameworks Navigation End ----------

// ---------- Web Servers Navigation Start ----------
// import ServersGeneral from '@/Navigation/IndividualNav/BackEndNav/WebServers/ServersGeneral';
// import Apache from '@/Navigation/IndividualNav/BackEndNav/WebServers/Apache';
// import Nginx from '@/Navigation/IndividualNav/BackEndNav/WebServers/Nginx';
// ---------- Web Servers Navigation End ----------

const backEnd: Subpage = {
  name: 'Back End',
  subpages: [
    APIsNav,
    {
      name: 'Authentication & Authorization',
      subpages: [
        // AuthenticationNavigation,
        // AuthorizationNavigation
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
        // DjangoNavigation,
        // ExpressJSNavigation,
        // FlaskNavigation,
        // KoaJSNavigation,
        // MERNNavigation,
        // NodeJSNavigation,
        // RubyNavigation,
        // SpringBootNavigation,
        // WebSocketsNavigation
      ]
    },
    {
      name: 'Web Servers',
      subpages: [
        // ServersGeneralNavigation,
        // NginxNavigation,
        // ApacheNavigation
      ]
    }
  ]
};

export default backEnd;