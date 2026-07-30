import type { Subpage } from '@/types/navigation';

import RESTInDjango from '@/navigation/individual/modularized/BackEnd/Frameworks/Django/Advanced/DjangoAndRest';
import Deployment from '@/navigation/individual/modularized/BackEnd/Frameworks/Django/Advanced/Deployment';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    RESTInDjango,
    Deployment
  ]
};

export default Advanced;