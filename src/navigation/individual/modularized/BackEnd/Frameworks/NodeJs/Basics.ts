import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/BackEnd/Frameworks/NodeJs/Basics/Fundamentals';
import ModulesAndPackages from '@/navigation/individual/modularized/BackEnd/Frameworks/NodeJs/Basics/ModulesAndPackages';
import Tooling from '@/navigation/individual/modularized/BackEnd/Frameworks/NodeJs/Basics/Tooling';
import FilesAndStreams from '@/navigation/individual/modularized/BackEnd/Frameworks/NodeJs/Basics/FilesAndStreams';
import Networking from '@/navigation/individual/modularized/BackEnd/Frameworks/NodeJs/Basics/Networking';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    ModulesAndPackages,
    Tooling,
    FilesAndStreams,
    Networking
  ]
};

export default Basics;