import type { Subpage } from '@/types/navigation';

import FrontEnd from '@/navigation/individual/topics/glossaryAndResources/FrontEnd';
import Languages from '@/navigation/individual/topics/glossaryAndResources/Languages';
import Backend from '@/navigation/individual/topics/glossaryAndResources/BackEnd';
// import CloudOps from '@/navigation/individual/topics/glossaryAndResources/CloudOps';
// import TestingAndTools from '@/navigation/individual/topics/glossaryAndResources/TestingAndTools';
// import Tools from '@/navigation/individual/topics/glossaryAndResources/Tools';
// import GraphQL from '@/navigation/individual/topics/glossaryAndResources/GraphQL';
// import Stacks from '@/navigation/individual/topics/glossaryAndResources/Stacks';

const glossary: Subpage = {
  name: 'Glossary & Resources',
  subpages: [
    FrontEnd,
    Languages,
    Backend,
    // CloudOps,
    // TestingAndTools,
    // Tools,
    // GraphQL,
    // Stacks
  ]
};

export default glossary;