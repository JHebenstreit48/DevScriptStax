import type { Subpage } from '@/types/navigation';

import HTML from '@/Navigation/Individual/Topics/FrontEnd/HTML';
import CSS from '@/Navigation/Individual/Topics/FrontEnd/CSS';
import Markdown from '@/Navigation/Individual/Topics/FrontEnd/Markdown';
import React from '@/Navigation/Individual/Topics/FrontEnd/React';
import Vue from '@/Navigation/Individual/Topics/FrontEnd/Vue';
import Angular from '@/Navigation/Individual/Topics/FrontEnd/Angular';
import Svelte from '@/Navigation/Individual/Topics/FrontEnd/Svelte';
import Redux from '@/Navigation/Individual/Topics/FrontEnd/Redux';
import NextJS from '@/Navigation/Individual/Topics/FrontEnd/NextJS';
import Gatsby from '@/Navigation/Individual/Topics/FrontEnd/Gatsby';

const frontEnd: Subpage = {
  name: 'Frontend',
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