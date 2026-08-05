import type { Subpage } from '@/types/navigation';

import frontEnd from '@/navigation/combined/topics/frontEnd';
import languages from '@/navigation/combined/topics/languages';
import backEnd from '@/navigation/combined/topics/backEnd';
import cloudAndDeployment from '@/navigation/combined/topics/cloudAndDeployment';
import testingAndTools from '@/navigation/combined/topics/testing';
import glossaryAndResources from '@/navigation/combined/topics/glossary';

const pages: Subpage[] = [
  frontEnd,
  languages,
  backEnd,
  cloudAndDeployment,
  testingAndTools,
  glossaryAndResources
];

export default pages;