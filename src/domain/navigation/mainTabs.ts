import type { Subpage } from '@/types/navigation';

import frontEnd from '@/navigation/combined/topics/frontEnd';
import languages from '@/navigation/combined/topics/languages';
import backEnd from '@/navigation/combined/topics/backEnd';
import cloudAndDeployment from '@/navigation/combined/topics/cloudAndDeployment';
import testing from '@/navigation/combined/topics/testing';
import tools from '@/navigation/combined/topics/tools';
import graphQLAndApollo from '@/navigation/combined/topics/graphQLAndApollo';
import stacks from '@/navigation/combined/topics/stacks';
import glossary from '@/navigation/combined/topics/glossary';

const pages: Subpage[] = [
  frontEnd,
  languages,
  backEnd,
  cloudAndDeployment,
  testing,
  tools,
  graphQLAndApollo,
  stacks,
  glossary
];

export default pages;