import type { Subpage } from '@/types/navigation';

import HTML from '@/navigation/individual/topics/FrontEnd/HTML';
import CSS from '@/navigation/individual/topics/FrontEnd/CSS';
import Markdown from '@/navigation/individual/topics/FrontEnd/Markdown';
import React from '@/navigation/individual/topics/FrontEnd/React';
import Vue from '@/navigation/individual/topics/FrontEnd/Vue';
import Angular from '@/navigation/individual/topics/FrontEnd/Angular';
import Svelte from '@/navigation/individual/topics/FrontEnd/Svelte';
import Redux from '@/navigation/individual/topics/FrontEnd/Redux';
import NextJS from '@/navigation/individual/topics/FrontEnd/NextJS';
import Gatsby from '@/navigation/individual/topics/FrontEnd/Gatsby';

const frontEnd: Subpage = {
  name: 'Front End',
  subpages: [
    HTML,
    CSS,
    Markdown,
    React,
    Vue,
    Angular,
    Svelte,
    Redux,
    NextJS,
    Gatsby
  ]
};

export default frontEnd;