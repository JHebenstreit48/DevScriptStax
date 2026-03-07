import type { Subpage } from '@/types/navigation';

import Angular from '@/Navigation/Individual/Topics/FrontEnd/Angular';
import CSS from '@/Navigation/Individual/Topics/FrontEnd/CSS';
import Gatsby from '@/Navigation/Individual/Topics/FrontEnd/Gatsby';
import HTML from '@/Navigation/Individual/Topics/FrontEnd/HTML';
import Markdown from '@/Navigation/Individual/Topics/FrontEnd/Markdown';
import NextJS from '@/Navigation/Individual/Topics/FrontEnd/NextJS';
import React from '@/Navigation/Individual/Topics/FrontEnd/React';
import Redux from '@/Navigation/Individual/Topics/FrontEnd/Redux';
import Svelte from '@/Navigation/Individual/Topics/FrontEnd/Svelte';
import Vue from '@/Navigation/Individual/Topics/FrontEnd/Vue';

const frontEnd: Subpage = {
  name: 'Frontend',
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