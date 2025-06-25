import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import AngularNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Angular';
import CSSNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/CSS';
import EnvVariablesNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/EnvVariables';
import GatsbyNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Gatsby';
import HTMLNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/HTML';
import JavaScriptNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/JavaScript';
import MarkdownNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Markdown';
import NextJSNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/NextJS';
import ReactNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/React';
import ReduxNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Redux';
import SvelteNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Svelte';
import VueNav from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Vue';
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
    NextJSNav,
    ReactNav,
    ReduxNav,
    SvelteNav,
    VueNav,
    // ViteNav
  ]
};

export default frontEnd;