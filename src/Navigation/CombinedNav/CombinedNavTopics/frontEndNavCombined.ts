import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------- Angular Navigation Start ----------
import AngularBasics from '@/Navigation/IndividualNav/FrontEndNav/AngularNav/Basics';
import AngularCoreConcepts from '@/Navigation/IndividualNav/FrontEndNav/AngularNav/CoreConcepts';
import AngularAdvanced from '@/Navigation/IndividualNav/FrontEndNav/AngularNav/Advanced';
import AngularSecurity from '@/Navigation/IndividualNav/FrontEndNav/AngularNav/Security';
import AngularTesting from '@/Navigation/IndividualNav/FrontEndNav/AngularNav/Testing';
// ---------- Angular Navigation End ----------

// ---------- CSS Navigation Start ----------
import CSSVanilla from '@/Navigation/IndividualNav/FrontEndNav/CSSNav/Vanilla';
import CSSFrameworks from '@/Navigation/IndividualNav/FrontEndNav/CSSNav/Frameworks';
import CSSPostprocessors from '@/Navigation/IndividualNav/FrontEndNav/CSSNav/Postprocessors';
import CSSPreprocessors from '@/Navigation/IndividualNav/FrontEndNav/CSSNav/Preprocessors';
// ---------- CSS Navigation End ----------

import GatsbyNav from '@/Navigation/IndividualNav/FrontEndNav/GatsbyNav/Gatsby';

// ---------- HTML Navigation Start ----------
import HTMLBasics from '@/Navigation/IndividualNav/FrontEndNav/HTMLNav/Basics';
import HTMLIntermediate from '@/Navigation/IndividualNav/FrontEndNav/HTMLNav/Intermediate';
import HTMLAdvanced from '@/Navigation/IndividualNav/FrontEndNav/HTMLNav/Advanced';
import HTMLBestPractices from '@/Navigation/IndividualNav/FrontEndNav/HTMLNav/BestPractices';
// ---------- HTML Navigation End ----------

// ---------- JavaScript Navigation Start ----------
import JSBasics from '@/Navigation/IndividualNav/FrontEndNav/JavaScriptNav/Basics';
import JSIntermediate from '@/Navigation/IndividualNav/FrontEndNav/JavaScriptNav/Intermediate';
import JSAdvanced from '@/Navigation/IndividualNav/FrontEndNav/JavaScriptNav/Advanced';
import JSBestPractices from '@/Navigation/IndividualNav/FrontEndNav/JavaScriptNav/BestPractices';
// ---------- JavaScript Navigation End ----------

import MarkdownNav from '@/Navigation/IndividualNav/FrontEndNav/MarkdownNav/Markdown';
import NextJSNav from '@/Navigation/IndividualNav/FrontEndNav/NextJSNav/Nextjs';

// ---------- React Navigation Start ----------
import ReactBasics from '@/Navigation/IndividualNav/FrontEndNav/ReactNav/Basics';
import ReactAndTS from '@/Navigation/IndividualNav/FrontEndNav/ReactNav/ReactAndTypeScript';
import ReactAdvanced from '@/Navigation/IndividualNav/FrontEndNav/ReactNav/Advanced';
import ReactFullStack from '@/Navigation/IndividualNav/FrontEndNav/ReactNav/FullStack';
import ReactTools from '@/Navigation/IndividualNav/FrontEndNav/ReactNav/Tools';
// ---------- React Navigation End ----------

import ReduxNav from '@/Navigation/IndividualNav/FrontEndNav/ReduxNav/Redux';
import SvelteNav from '@/Navigation/IndividualNav/FrontEndNav/SvelteNav/Svelte';
import VueNav from '@/Navigation/IndividualNav/FrontEndNav/VueNav/Vue';
import ViteNav from '@/Navigation/IndividualNav/FrontEndNav/ViteNav/Vite';

const frontEndNav: Page = {
  name: 'Front End',
  subpages: [
    {
      name: 'Angular',
      subpages: [
        AngularBasics,
        AngularCoreConcepts,
        AngularAdvanced,
        AngularSecurity,
        AngularTesting
      ]
    },
    {
      name: 'CSS',
      subpages: [
        CSSVanilla,
        CSSFrameworks,
        CSSPreprocessors,
        CSSPostprocessors
      ]
    },
    GatsbyNav,
    {
      name: 'HTML',
      subpages: [
        HTMLBasics,
        HTMLIntermediate,
        HTMLAdvanced,
        HTMLBestPractices
      ]
    },
    {
      name: 'JavaScript',
      subpages: [
        JSBasics,
        JSIntermediate,
        JSAdvanced,
        JSBestPractices
      ]
    },
    MarkdownNav,
    NextJSNav,
    {
      name: 'React',
      subpages: [
        ReactBasics,
        ReactAndTS,
        ReactAdvanced,
        ReactFullStack,
        ReactTools
      ]
    },
    ReduxNav,
    SvelteNav,
    VueNav,
    ViteNav
  ]
};

export default frontEndNav;
