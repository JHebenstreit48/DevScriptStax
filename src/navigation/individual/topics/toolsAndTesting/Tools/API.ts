import type { Subpage } from '@/types/navigation';

import Insomnia from '@/navigation/individual/topics/toolsAndTesting/Tools/API/Insomnia';
import Postman from '@/navigation/individual/topics/toolsAndTesting/Tools/API/Postman';

const API: Subpage = {
  name: 'API',
  subpages: [
    Insomnia,
    Postman
  ],
};

export default API;