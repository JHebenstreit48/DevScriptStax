import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import AngularNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Angular';
import CSSNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/CSS';
import EnvVariablesNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/EnvVariables';
import GatsbyNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Gatsby';
import HTMLNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/HTML';
import JavaScriptNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/JavaScript';
import MarkdownNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Markdown';
// import NextJSNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/NextJS';
import ReactNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/React';
// import ReduxNav from '@/Navigation/IndividualNav/FrontEndNav/Granularized/ReduxNav/Redux';
// import SvelteNav from '@/Navigation/IndividualNav/FrontEndNav/Granularized/SvelteNav/Svelte';
// import VueNav from '@/Navigation/IndividualNav/FrontEndNav/Granularized/VueNav/Vue';
// import ViteNav from '@/Navigation/IndividualNav/FrontEndNav/Granularized/ViteNav/Vite';

const frontEnd: Subpage = {
  name: 'Front End',
  subpages: [
    AngularNav,
    CSSNav,
    EnvVariablesNav,
    GatsbyNav,
    HTMLNav,
    JavaScriptNav,
    MarkdownNav,
    // NextJSNav,
    ReactNav,
    // ReduxNav,
    // SvelteNav,
    // VueNav,
    // ViteNav
  ]
};

export default frontEnd;