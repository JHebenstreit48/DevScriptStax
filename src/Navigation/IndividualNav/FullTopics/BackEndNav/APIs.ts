import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// API Introduction
import Fundamentals from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/APIIntroduction/Fundamentals';
import TypesOfAPIs from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/APIIntroduction/TypesOfAPIs';
import Documentation from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/APIIntroduction/Documentation';

// REST APIs
import RESTFundamentals from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/RESTFundamentals';
import HTTPMethods from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/HTTPMethods';
import Endpoints from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/EndpointsAndResources';
import RESTDesign from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/RESTfulDesignPrinciples';
import RESTErrorHandling from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/ErrorHandling';

// Advanced Concepts
import Caching from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/AdvancedConcepts/Caching';
import Gateways from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/AdvancedConcepts/Gateways';
import RateLimiting from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/AdvancedConcepts/RateLimiting';
import Versioning from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/AdvancedConcepts/Versioning';
import Webhooks from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/AdvancedConcepts/Webhooks';

const APIsNav: Subpage = {
  name: 'APIs',
  subpages: [
    {
      name: 'Introduction',
      subpages: [
        Fundamentals,
        TypesOfAPIs,
        Documentation
      ]
    },
    {
      name: 'REST APIs',
      subpages: [
        RESTFundamentals,
        HTTPMethods,
        Endpoints,
        RESTDesign,
        RESTErrorHandling
      ]
    },
    {
      name: 'Advanced Concepts',
      subpages: [
        Caching,
        Gateways,
        RateLimiting,
        Versioning,
        Webhooks
      ]
    }
  ]
};

export default APIsNav;
