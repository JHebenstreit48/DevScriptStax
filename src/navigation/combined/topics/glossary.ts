import type { Subpage } from '@/types/navigation';

import FrontEnd from '@/navigation/individual/topics/Glossary/FrontEnd';
import Languages from '@/navigation/individual/topics/Glossary/Languages';
import Backend from '@/navigation/individual/topics/Glossary/BackEnd';
// import CloudOps from '@/navigation/individual/topics/Glossary/CloudOps';
import Testing from '@/navigation/individual/topics/Glossary/Testing';
// import Tools from '@/navigation/individual/topics/Glossary/Tools';
// import GraphQL from '@/navigation/individual/topics/Glossary/GraphQL';
// import Stacks from '@/navigation/individual/topics/Glossary/Stacks';

const glossary: Subpage = {
  name: 'Glossary',
  subpages: [
    FrontEnd,
    Languages,
    Backend,
    // CloudOps,
    Testing,
    // Tools,
    // GraphQL,
    // Stacks
  ]
};

export default glossary;