import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import APIsNav from '@/Navigation/IndividualNav/FullTopics/BackEndNav/APIs';

// ---------- Authentication & Authorization Navigation Start ----------
// import AuthorizationNavigation from '@/Navigation/IndividualNav/BackEndNav/AuthenAndAuthor/Authorization';
// import AuthenticationNavigation from '@/Navigation/IndividualNav/BackEndNav/AuthenAndAuthor/Authentication';
// ---------- Authentication & Authorization Navigation End ----------

// ---------- Databases Navigation Start ----------
import Firebase from '@/Navigation/IndividualNav/FullTopics/BackEndNav/DatabaseNav/Firebase';
import MongoDB from '@/Navigation/IndividualNav/FullTopics/BackEndNav/DatabaseNav/MongoDB';
// import MySQL from '@/Navigation/IndividualNav/FullTopics/BackEndNav/DatabaseNav/MySQL';
// import PostgreSQL from '@/Navigation/IndividualNav/FullTopics/BackEndNav/DatabaseNav/PostgreSQL';
// import Redis from '@/Navigation/IndividualNav/FullTopics/BackEndNav/DatabaseNav/Redis';
// import SQLite from '@/Navigation/IndividualNav/FullTopics/BackEndNav/DatabaseNav/SQLite';
// ---------- Databases Navigation End ----------

// ---------- Frameworks Navigation Start ----------
// import DjangoNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/Django';
// import ExpressJSNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/ExpressJS';
// import FlaskNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/Flask';
// import KoaJSNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/KoaJS';
// import MERNNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/MERN';
// import NodeJSNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/NodeJS';
// import RubyNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/Ruby';
// import SpringBootNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/SpringBoot';
// import WebSocketsNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/WebSockets';
// ---------- Frameworks Navigation End ----------

// ---------- Web Servers Navigation Start ----------
// import ServersGeneralNavigation from '@/Navigation/IndividualNav/BackEndNav/WebServers/ServersGeneral';
// import ApacheNavigation from '@/Navigation/IndividualNav/BackEndNav/WebServers/Apache';
// import NginxNavigation from '@/Navigation/IndividualNav/BackEndNav/WebServers/Nginx';
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
        // MySQL,
        // PostgreSQL,
        // Redis,
        // SQLite
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