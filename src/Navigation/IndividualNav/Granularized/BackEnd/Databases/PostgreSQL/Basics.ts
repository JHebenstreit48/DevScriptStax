import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/Basics/Fundamentals';
import SetupAndConfig from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/Basics/SetupAndConfig';
import Core from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/Basics/Core';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    SetupAndConfig,
    Core
  ]
};

export default Basics;