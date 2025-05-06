import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------- APIs Navigation Start ----------

// ---------- API Introduction Navigation Start ----------
import APIFundamentalsNavigation from '@/Navigation/IndividualNav/BackEndNavigation/APINavigation/APIIntroduction/APIFundamentals';
import TypesOfAPIsNavigation from '@/Navigation/IndividualNav/BackEndNavigation/APINavigation/APIIntroduction/TypesOfAPIs';
import APIDocumentationNavigation from '@/Navigation/IndividualNav/BackEndNavigation/APINavigation/APIIntroduction/APIDocumentation';
// ---------- API Introduction Navigation End ----------

// ---------- REST APIs Navigation Start ----------
import RESTFundamentalsNavigation from '@/Navigation/IndividualNav/BackEndNavigation/APINavigation/RESTAPIs/RESTFundamentals';
import HTTPMethodsNavigation from '@/Navigation/IndividualNav/BackEndNavigation/APINavigation/RESTAPIs/HTTPMethods';
import EndpointsAndResourcesNavigation from '@/Navigation/IndividualNav/BackEndNavigation/APINavigation/RESTAPIs/EndpointsAndResources';
import RESTfulDesignPrinciplesNavigation from '@/Navigation/IndividualNav/BackEndNavigation/APINavigation/RESTAPIs/RESTfulDesignPrinciples';
import ErrorHandlingNavigation from '@/Navigation/IndividualNav/BackEndNavigation/APINavigation/RESTAPIs/ErrorHandling';
// ---------- REST APIs Navigation End ----------

// ---------- Advanced API Concepts Navigation Start ----------
import RateLimitingNavigation from '@/Navigation/IndividualNav/BackEndNavigation/APINavigation/AdvancedConcepts/RateLimiting';
import APIVersioningNavigation from '@/Navigation/IndividualNav/BackEndNavigation/APINavigation/AdvancedConcepts/APIVersioning';
import APICachingNavigation from '@/Navigation/IndividualNav/BackEndNavigation/APINavigation/AdvancedConcepts/APICaching';
import APIGatewaysNavigation from '@/Navigation/IndividualNav/BackEndNavigation/APINavigation/AdvancedConcepts/APIGateways';
import WebhooksNavigation from '@/Navigation/IndividualNav/BackEndNavigation/APINavigation/AdvancedConcepts/Webhooks';
// ---------- Advanced API Concepts Navigation End ----------

// ---------- APIs Navigation End ----------

// ---------- Authentication & Authorization Navigation Start ----------
import AuthorizationNavigation from '@/Navigation/IndividualNav/BackEndNavigation/AuthenAndAuthorNavigation/Authorization';
import AuthenticationNavigation from '@/Navigation/IndividualNav/BackEndNavigation/AuthenAndAuthorNavigation/Authentication';
// ---------- Authentication & Authorization Navigation End ----------

// ---------- Databases Navigation Start ----------
import FirebaseNavigation from '@/Navigation/IndividualNav/BackEndNavigation/DatabaseNavigation/Firebase';
import MongoDBNavigation from '@/Navigation/IndividualNav/BackEndNavigation/DatabaseNavigation/MongoDB';
import MySQLNavigation from '@/Navigation/IndividualNav/BackEndNavigation/DatabaseNavigation/MySQL';
import PostgreSQLNavigation from '@/Navigation/IndividualNav/BackEndNavigation/DatabaseNavigation/PostgreSQL';
import RedisNavigation from '@/Navigation/IndividualNav/BackEndNavigation/DatabaseNavigation/Redis';
import SQLiteNavigation from '@/Navigation/IndividualNav/BackEndNavigation/DatabaseNavigation/SQLite';
// ---------- Databases Navigation End ----------

// ---------- Frameworks Navigation Start ----------
import DjangoNavigation from '@/Navigation/IndividualNav/BackEndNavigation/FrameworksNavigation/Django';
import ExpressJSNavigation from '@/Navigation/IndividualNav/BackEndNavigation/FrameworksNavigation/ExpressJS';
import FlaskNavigation from '@/Navigation/IndividualNav/BackEndNavigation/FrameworksNavigation/Flask';
import KoaJSNavigation from '@/Navigation/IndividualNav/BackEndNavigation/FrameworksNavigation/KoaJS';
import MERNNavigation from '@/Navigation/IndividualNav/BackEndNavigation/FrameworksNavigation/MERN';
import NodeJSNavigation from '@/Navigation/IndividualNav/BackEndNavigation/FrameworksNavigation/NodeJS';
import RubyNavigation from '@/Navigation/IndividualNav/BackEndNavigation/FrameworksNavigation/Ruby';
import SpringBootNavigation from '@/Navigation/IndividualNav/BackEndNavigation/FrameworksNavigation/SpringBoot';
import WebSocketsNavigation from '@/Navigation/IndividualNav/BackEndNavigation/FrameworksNavigation/WebSockets';
// ---------- Frameworks Navigation End ----------

// ---------- Web Servers Navigation Start ----------
import ServersGeneralNavigation from '@/Navigation/IndividualNav/BackEndNavigation/WebServersNavigation/ServersGeneral';
import ApacheNavigation from '@/Navigation/IndividualNav/BackEndNavigation/WebServersNavigation/Apache';
import NginxNavigation from '@/Navigation/IndividualNav/BackEndNavigation/WebServersNavigation/Nginx';
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
      subpages: [AuthenticationNavigation, AuthorizationNavigation]
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
      subpages: [ServersGeneralNavigation, NginxNavigation, ApacheNavigation]
    }
  ]
};

export default backEndNav;
