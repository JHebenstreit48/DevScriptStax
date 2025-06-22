import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import AngularNav from '@/Navigation/IndividualNav/FrontEndNav/FullTopics/Angular';
import CSSNav from '@/Navigation/IndividualNav/FrontEndNav/FullTopics/CSS';
import EnvVariablesNav from '@/Navigation/IndividualNav/FrontEndNav/FullTopics/EnvVariables';
import GatsbyNav from '@/Navigation/IndividualNav/FrontEndNav/Granularized/GatsbyNav/Gatsby';
import HTMLNav from '@/Navigation/IndividualNav/FrontEndNav/FullTopics/HTML';
import JavaScriptNav from '@/Navigation/IndividualNav/FrontEndNav/FullTopics/JavaScript';
import MarkdownNav from '@/Navigation/IndividualNav/FrontEndNav/Granularized/MarkdownNav/Markdown';
import NextJSNav from '@/Navigation/IndividualNav/FrontEndNav/Granularized/NextJSNav/Nextjs';
import ReactNav from '@/Navigation/IndividualNav/FrontEndNav/FullTopics/React';
import ReduxNav from '@/Navigation/IndividualNav/FrontEndNav/Granularized/ReduxNav/Redux';
import SvelteNav from '@/Navigation/IndividualNav/FrontEndNav/Granularized/SvelteNav/Svelte';
import VueNav from '@/Navigation/IndividualNav/FrontEndNav/Granularized/VueNav/Vue';
import ViteNav from '@/Navigation/IndividualNav/FrontEndNav/Granularized/ViteNav/Vite';

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
    ViteNav
  ]
};

export default frontEnd;