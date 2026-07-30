import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Basics/Fundamentals';
import SetupAndConfig from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Basics/SetupAndConfig';
import Core from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Basics/Core';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    SetupAndConfig,
    Core
  ]
};

export default Basics;