import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/NodeJs/Basics/Fundamentals';
import ModulesAndPackages from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/NodeJs/Basics/ModulesAndPackages';
import Tooling from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/NodeJs/Basics/Tooling';
import FilesAndStreams from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/NodeJs/Basics/FilesAndStreams';
import Networking from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/NodeJs/Basics/Networking';

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