import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// API Introduction
import Fundamentals from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Basics/Fundamentals';
import TypesOfAPIs from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Basics/TypesOfAPIs';
import Documentation from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Basics/Documentation';

// REST APIs
import RESTFundamentals from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/RESTFundamentals';
import HTTPMethods from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/HTTPMethods';
import Endpoints from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/EndpointsAndResources';
import RESTDesign from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/RESTfulDesignPrinciples';
import RESTErrorHandling from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/RESTAPIs/ErrorHandling';

// Advanced Concepts
import APIsAdvanced from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Advanced';


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
    APIsAdvanced
  ]
};

export default APIsNav;
