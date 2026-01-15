import type { Subpage } from '@/types/navigation';

import frontEnd from '@/Navigation/Combined/Topics/frontEnd';
import languages from '@/Navigation/Combined/Topics/languages';
import backEnd from '@/Navigation/Combined/Topics/backEnd';
import cloudAndDeployment from '@/Navigation/Combined/Topics/cloudAndDeployment';
import testing from '@/Navigation/Combined/Topics/testing';
import tools from '@/Navigation/Combined/Topics/tools';
import graphQLAndApollo from '@/Navigation/Combined/Topics/graphQLAndApollo';
import stacks from '@/Navigation/Combined/Topics/stacks';

const pages: Subpage[] = [
  frontEnd,
  languages,
  backEnd,
  cloudAndDeployment,
  testing,
  tools,
  graphQLAndApollo,
  stacks
];

export default pages;