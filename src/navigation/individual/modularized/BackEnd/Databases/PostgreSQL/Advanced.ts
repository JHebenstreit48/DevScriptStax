import type { Subpage } from '@/types/navigation';

import AdvancedSQL from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Advanced/AdvancedSQL';
import Views from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Advanced/Views';
import JSONAndJSONB from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Advanced/JSONAndJSONB';
import ExtensionsAndFDW from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Advanced/ExtensionsAndFDW';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    AdvancedSQL,
    Views,
    JSONAndJSONB,
    ExtensionsAndFDW
  ]
};

export default Advanced;