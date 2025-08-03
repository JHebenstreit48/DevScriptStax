import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Angular from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Angular';
import CSS from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/CSS';
import EnvVariables from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/EnvVariables';
import Gatsby from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Gatsby';
import HTML from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/HTML';
import JavaScript from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/JavaScript';
import Markdown from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Markdown';
import NextJS from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/NextJS';
import React from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/React';
import Redux from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Redux';
import Svelte from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Svelte';
import Vue from '@/Navigation/IndividualNav/FullTopics/FrontEndNav/Vue';
// import ViteNav from '@/Navigation/IndividualNav/FrontEndNav/Granularized/ViteNav/Vite';

const frontEnd: Subpage = {
  name: 'Front End',
  subpages: [
    Angular,
    CSS,
    EnvVariables,
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