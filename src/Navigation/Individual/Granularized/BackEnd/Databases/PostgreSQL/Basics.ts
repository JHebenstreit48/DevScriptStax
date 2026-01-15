import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Basics/Fundamentals';
import SetupAndConfig from '@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Basics/SetupAndConfig';
import Core from '@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Basics/Core';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    SetupAndConfig,
    Core
  ]
};

export default Basics;