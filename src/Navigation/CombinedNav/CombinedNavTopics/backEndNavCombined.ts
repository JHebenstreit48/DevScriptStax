import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------- APIs Navigation Start ----------

// ---------- API Introduction Navigation Start ----------
import APIFundamentalsNavigation from '@/Navigation/IndividualNav/BackEndNav/APINav/APIIntroduction/APIFundamentals';
import TypesOfAPIsNavigation from '@/Navigation/IndividualNav/BackEndNav/APINav/APIIntroduction/TypesOfAPIs';
import APIDocumentationNavigation from '@/Navigation/IndividualNav/BackEndNav/APINav/APIIntroduction/APIDocumentation';
// ---------- API Introduction Navigation End ----------

// ---------- REST APIs Navigation Start ----------
import RESTFundamentalsNavigation from '@/Navigation/IndividualNav/BackEndNav/APINav/RESTAPIs/RESTFundamentals';
import HTTPMethodsNavigation from '@/Navigation/IndividualNav/BackEndNav/APINav/RESTAPIs/HTTPMethods';
import EndpointsAndResourcesNavigation from '@/Navigation/IndividualNav/BackEndNav/APINav/RESTAPIs/EndpointsAndResources';
import RESTfulDesignPrinciplesNavigation from '@/Navigation/IndividualNav/BackEndNav/APINav/RESTAPIs/RESTfulDesignPrinciples';
import ErrorHandlingNavigation from '@/Navigation/IndividualNav/BackEndNav/APINav/RESTAPIs/ErrorHandling';
// ---------- REST APIs Navigation End ----------

// ---------- Advanced API Concepts Navigation Start ----------
import RateLimitingNavigation from '@/Navigation/IndividualNav/BackEndNav/APINav/AdvancedConcepts/RateLimiting';
import APIVersioningNavigation from '@/Navigation/IndividualNav/BackEndNav/APINav/AdvancedConcepts/APIVersioning';
import APICachingNavigation from '@/Navigation/IndividualNav/BackEndNav/APINav/AdvancedConcepts/APICaching';
import APIGatewaysNavigation from '@/Navigation/IndividualNav/BackEndNav/APINav/AdvancedConcepts/APIGateways';
import WebhooksNavigation from '@/Navigation/IndividualNav/BackEndNav/APINav/AdvancedConcepts/Webhooks';
// ---------- Advanced API Concepts Navigation End ----------

// ---------- APIs Navigation End ----------

// ---------- Authentication & Authorization Navigation Start ----------
import AuthorizationNavigation from '@/Navigation/IndividualNav/BackEndNav/AuthenAndAuthor/Authorization';
import AuthenticationNavigation from '@/Navigation/IndividualNav/BackEndNav/AuthenAndAuthor/Authentication';
// ---------- Authentication & Authorization Navigation End ----------

// ---------- Databases Navigation Start ----------
import FirebaseNavigation from '@/Navigation/IndividualNav/BackEndNav/DatabaseNav/Firebase';
import MongoDBNavigation from '@/Navigation/IndividualNav/BackEndNav/DatabaseNav/MongoDB';
import MySQLNavigation from '@/Navigation/IndividualNav/BackEndNav/DatabaseNav/MySQL';
import PostgreSQLNavigation from '@/Navigation/IndividualNav/BackEndNav/DatabaseNav/PostgreSQL';
import RedisNavigation from '@/Navigation/IndividualNav/BackEndNav/DatabaseNav/Redis';
import SQLiteNavigation from '@/Navigation/IndividualNav/BackEndNav/DatabaseNav/SQLite';
// ---------- Databases Navigation End ----------

// ---------- Frameworks Navigation Start ----------
import DjangoNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/Django';
import ExpressJSNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/ExpressJS';
import FlaskNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/Flask';
import KoaJSNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/KoaJS';
import MERNNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/MERN';
import NodeJSNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/NodeJS';
import RubyNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/Ruby';
import SpringBootNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/SpringBoot';
import WebSocketsNavigation from '@/Navigation/IndividualNav/BackEndNav/Frameworks/WebSockets';
// ---------- Frameworks Navigation End ----------

// ---------- Web Servers Navigation Start ----------
import ServersGeneralNavigation from '@/Navigation/IndividualNav/BackEndNav/WebServers/ServersGeneral';
import ApacheNavigation from '@/Navigation/IndividualNav/BackEndNav/WebServers/Apache';
import NginxNavigation from '@/Navigation/IndividualNav/BackEndNav/WebServers/Nginx';
// ---------- Web Servers Navigation End ----------

const backEndNav: Page = {
  name: 'Back End',
  subpages: [
    {
      name: 'APIs',
      subpages: [
        {
          name: 'Introduction to APIs',
          subpages: [
            APIFundamentalsNavigation,
            TypesOfAPIsNavigation,
            APIDocumentationNavigation
          ]
        },
        {
          name: 'REST APIs',
          subpages: [
            RESTFundamentalsNavigation,
            HTTPMethodsNavigation,
            EndpointsAndResourcesNavigation,
            RESTfulDesignPrinciplesNavigation,
            ErrorHandlingNavigation
          ]
        },
        {
          name: 'Advanced API Concepts',
          subpages: [
            RateLimitingNavigation,
            APIVersioningNavigation,
            APICachingNavigation,
            APIGatewaysNavigation,
            WebhooksNavigation
          ]
        }
      ]
    },
    {
      name: 'Authentication & Authorization',
      subpages: [
        AuthenticationNavigation,
        AuthorizationNavigation
      ]
    },
    {
      name: 'Databases',
      subpages: [
        FirebaseNavigation,
        MongoDBNavigation,
        MySQLNavigation,
        PostgreSQLNavigation,
        RedisNavigation,
        SQLiteNavigation
      ]
    },
    {
      name: 'Frameworks',
      subpages: [
        DjangoNavigation,
        ExpressJSNavigation,
        FlaskNavigation,
        KoaJSNavigation,
        MERNNavigation,
        NodeJSNavigation,
        RubyNavigation,
        SpringBootNavigation,
        WebSocketsNavigation
      ]
    },
    {
      name: 'Web Servers',
      subpages: [
        ServersGeneralNavigation,
        NginxNavigation,
        ApacheNavigation
      ]
    }
  ]
};

export default backEndNav;
