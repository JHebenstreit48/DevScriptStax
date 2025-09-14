import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Angular from '@/Navigation/IndividualNav/FullTopics/FrontEnd/Angular';
import CSS from '@/Navigation/IndividualNav/FullTopics/FrontEnd/CSS';
import Gatsby from '@/Navigation/IndividualNav/FullTopics/FrontEnd/Gatsby';
import HTML from '@/Navigation/IndividualNav/FullTopics/FrontEnd/HTML';
import JavaScript from '@/Navigation/IndividualNav/FullTopics/FrontEnd/JavaScript';
import Markdown from '@/Navigation/IndividualNav/FullTopics/FrontEnd/Markdown';
import NextJS from '@/Navigation/IndividualNav/FullTopics/FrontEnd/NextJS';
import React from '@/Navigation/IndividualNav/FullTopics/FrontEnd/React';
import Redux from '@/Navigation/IndividualNav/FullTopics/FrontEnd/Redux';
import Svelte from '@/Navigation/IndividualNav/FullTopics/FrontEnd/Svelte';
import Vue from '@/Navigation/IndividualNav/FullTopics/FrontEnd/Vue';
// import ViteNav from '@/Navigation/IndividualNav/FrontEndNav/Granularized/ViteNav/Vite';

const frontEnd: Subpage = {
  name: 'Front End',
  subpages: [
    Angular,
    CSS,
    Gatsby,
    HTML,
    JavaScript,
    Markdown,
    NextJS,
    React,
    Redux,
    Svelte,
    Vue,
    // ViteNav
  ]
};

export default frontEnd;