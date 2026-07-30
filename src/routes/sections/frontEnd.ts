import { RouteObject } from "react-router-dom";

import Angular from '@/routes/individual/topics/FrontEnd/angular';
import CSS from '@/routes/individual/topics/FrontEnd/css';
import Gatsby from '@/routes/individual/topics/FrontEnd/gatsby';
import HTML from '@/routes/individual/topics/FrontEnd/html';
import Markdown from '@/routes/individual/topics/FrontEnd/markdown';
import NextJs from '@/routes/individual/topics/FrontEnd/nextJS';
import React from '@/routes/individual/topics/FrontEnd/react';
import Redux from '@/routes/individual/topics/FrontEnd/redux';
import Svelte from '@/routes/individual/topics/FrontEnd/svelte';
import Vue from '@/routes/individual/topics/FrontEnd/vue';

const frontEnd: RouteObject[] = [
  ...Angular,
  ...CSS,
  ...Gatsby,
  ...HTML,
  ...Markdown,
  ...NextJs,
  ...React,
  ...Redux,
  ...Svelte,
  ...Vue,
];

export default frontEnd;