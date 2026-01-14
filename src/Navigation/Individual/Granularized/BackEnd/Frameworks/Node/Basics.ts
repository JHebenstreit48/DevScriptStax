import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Fundamentals from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Node/Basics/Fundamentals';
import ModulesAndPackages from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Node/Basics/ModulesAndPackages';
import Tooling from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Node/Basics/Tooling';
import FilesAndStreams from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Node/Basics/FilesAndStreams';
import Networking from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Node/Basics/Networking';

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