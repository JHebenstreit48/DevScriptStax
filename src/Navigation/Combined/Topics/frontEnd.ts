import type { Subpage } from '@/types/navigation';

import Angular from '@/Navigation/Individual/FullTopics/FrontEnd/Angular';
import CSS from '@/Navigation/Individual/FullTopics/FrontEnd/CSS';
import Gatsby from '@/Navigation/Individual/FullTopics/FrontEnd/Gatsby';
import HTML from '@/Navigation/Individual/FullTopics/FrontEnd/HTML';
import Markdown from '@/Navigation/Individual/FullTopics/FrontEnd/Markdown';
import NextJS from '@/Navigation/Individual/FullTopics/FrontEnd/NextJS';
import React from '@/Navigation/Individual/FullTopics/FrontEnd/React';
import Redux from '@/Navigation/Individual/FullTopics/FrontEnd/Redux';
import Svelte from '@/Navigation/Individual/FullTopics/FrontEnd/Svelte';
import Vue from '@/Navigation/Individual/FullTopics/FrontEnd/Vue';

const frontEnd: Subpage = {
  name: 'Front End',
  subpages: [
    Angular,
    CSS,
    Gatsby,
    HTML,
    Markdown,
    NextJS,
    React,
    Redux,
    Svelte,
    Vue,
  ]
};

export default frontEnd;