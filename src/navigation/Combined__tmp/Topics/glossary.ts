import type { Subpage } from '@/types/navigation';

import FrontEnd from '@/Navigation/Individual/Topics/Glossary/FrontEnd';
import Languages from '@/Navigation/Individual/Topics/Glossary/Languages';
import Backend from '@/Navigation/Individual/Topics/Glossary/BackEnd';
// import CloudOps from '@/Navigation/Individual/Topics/Glossary/CloudOps';
import Testing from '@/Navigation/Individual/Topics/Glossary/Testing';
// import Tools from '@/Navigation/Individual/Topics/Glossary/Tools';
// import GraphQL from '@/Navigation/Individual/Topics/Glossary/GraphQL';
// import Stacks from '@/Navigation/Individual/Topics/Glossary/Stacks';

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