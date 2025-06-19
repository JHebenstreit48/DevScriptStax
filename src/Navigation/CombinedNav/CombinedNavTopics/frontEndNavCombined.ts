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
import ReactBasicsNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/Basics';
import ReactAndTypeScriptNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/ReactAndTypeScript';
import ReactAdvancedNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/Advanced';
import ReactFullStackNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/FullStack';
import ReactToolsNavigation from '@/Navigation/IndividualNav/FrontEndNavigation/ReactJSNavigation/Tools';
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
        ReactBasicsNavigation,
        ReactAndTypeScriptNavigation,
        ReactAdvancedNavigation,
        ReactFullStackNavigation,
        ReactToolsNavigation
      ]
    },
    ReduxNavigation,
    SvelteNavigation,
    VueNavigation,
    ViteNavigation
  ]
};

export default frontEndNav;
