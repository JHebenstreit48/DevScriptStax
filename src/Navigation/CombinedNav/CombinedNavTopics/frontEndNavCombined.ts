import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------- Angular Navigation Start ----------
import AngularBasicsNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/AngularNavigation/Basics';
import AngularCoreConceptsNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/AngularNavigation/CoreConcepts';
import AngularAdvancedNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/AngularNavigation/Advanced';
import AngularSecurityNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/AngularNavigation/Security';
import AngularTestingNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/AngularNavigation/Testing';
// ---------- Angular Navigation End ----------

// ---------- CSS Navigation Start ----------
import VanillaNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/CSSNavigation/Vanilla';
import FrameworksNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/CSSNavigation/Frameworks';
import PostprocessorsNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/CSSNavigation/Postprocessors';
import PreprocessorsNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/CSSNavigation/Preprocessors';
// ---------- CSS Navigation End ----------

import GatsbyNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/GatsbyNavigation/Gatsby';
import HTMLNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/HTMLNavigation/HTMLBasics';

// ---------- JavaScript Navigation Start ----------
import JavaScriptBasicsNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/JavaScriptNavigation/Basics';
import JavaScriptIntermediateNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/JavaScriptNavigation/Intermediate';
import JavaScriptAdvancedNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/JavaScriptNavigation/Advanced';
import JavaScriptBestPracticesNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/JavaScriptNavigation/BestPractices';
// ---------- JavaScript Navigation End ----------

import MarkdownNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/MarkdownNavigation/Markdown';
import NextJSNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/NextJSNavigation/Nextjs';

// ---------- React Navigation Start ----------

// ---------- React Basics Navigation Start ----------
import GettingStartedNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactBasics/GettingStarted';
import FundamentalsNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactBasics/Fundamentals';
import ComponentBehaviorNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactBasics/ComponentBehavior';
import WorkingWithDataNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactBasics/WorkingWithData';
import AdvancedTopicsNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactBasics/Advanced';
// ---------- React Basics Navigation End ---------

// ---------- React With TypeScript Navigation Start ----------
import RWTGettingStartedNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactAndTypeScript/GettingStarted';
import TypeScriptInReactNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactAndTypeScript/TypeScriptInReact';
import AdvancedConceptsNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactAndTypeScript/AdvancedConcepts';
import StateManagementNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactAndTypeScript/StateManagement';
import BestPracticesNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactAndTypeScript/BestPractices';
// ---------- React With TypeScript Navigation End ----------

// ---------- React Full Stack Navigation Start ----------
import FSRGettingStartedNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactFullStack/GettingStarted';
import FSFrontAndBackEndNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactFullStack/FrontEndToBackEnd';
import FSLargeScaleAppsNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactFullStack/LargeScaleApps';
import FSServerSideNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactFullStack/ServerSide';
import FSProductionReadinessNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactFullStack/ProductionReadiness';
// ---------- React Full Stack Navigation End ----------

// ---------- React Native Navigation Start ----------
import RNGettingStartedNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactNative/GettingStarted';
import RNCoreAndStateNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactNative/CoreAndState';
import RNNavAndFeaturesNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactNative/NavAndFeatures';
import RNBuildingAndPerformNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactNative/BuildingAndPerformance';
// ---------- React Native Navigation End ----------

// ---------- React Navigation End ----------

import ReduxNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReduxNavigation/Redux';
import SvelteNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/SvelteNavigation/Svelte';
import VueNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/VueNavigation/Vue';
import ViteNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ViteNavigation/Vite';

const frontEndNav: Page = {
  name: 'Front End',
  subpages: [
    {
      name: 'Angular',
      subpages: [
        AngularBasicsNavigation,
        AngularCoreConceptsNavigation,
        AngularAdvancedNavigation,
        AngularSecurityNavigation,
        AngularTestingNavigation
      ]
    },
    {
      name: 'CSS',
      subpages: [
        VanillaNavigation,
        FrameworksNavigation,
        PreprocessorsNavigation,
        PostprocessorsNavigation
      ]
    },
    GatsbyNavigation,
    HTMLNavigation,
    {
      name: 'JavaScript',
      subpages: [
        JavaScriptBasicsNavigation,
        JavaScriptIntermediateNavigation,
        JavaScriptAdvancedNavigation,
        JavaScriptBestPracticesNavigation
      ]
    },
    MarkdownNavigation,
    NextJSNavigation,
    {
      name: 'React',
      subpages: [
        {
          name: 'React Basics',
          subpages: [
            GettingStartedNavigation,
            FundamentalsNavigation,
            ComponentBehaviorNavigation,
            WorkingWithDataNavigation,
            AdvancedTopicsNavigation
          ]
        },
        {
          name: 'React With TypeScript',
          subpages: [
            RWTGettingStartedNavigation,
            TypeScriptInReactNavigation,
            AdvancedConceptsNavigation,
            StateManagementNavigation,
            BestPracticesNavigation
          ]
        },
        {
          name: 'React Full Stack',
          subpages: [
            FSRGettingStartedNavigation,
            FSFrontAndBackEndNavigation,
            FSLargeScaleAppsNavigation,
            FSServerSideNavigation,
            FSProductionReadinessNavigation
          ]
        },
        {
          name: 'React Native',
          subpages: [
            RNGettingStartedNavigation,
            RNCoreAndStateNavigation,
            RNNavAndFeaturesNavigation,
            RNBuildingAndPerformNavigation
          ]
        }
      ]
    },
    ReduxNavigation,
    SvelteNavigation,
    VueNavigation,
    ViteNavigation
  ]
};

export default frontEndNav;
