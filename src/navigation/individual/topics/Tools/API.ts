import type { Subpage } from '@/types/navigation';

import Insomnia from '@/Navigation/Individual/Topics/Tools/API/Insomnia';
import Postman from '@/Navigation/Individual/Topics/Tools/API/Postman';

const API: Subpage = {
  name: 'API',
  subpages: [
    Insomnia,
    Postman
  ],
};

export default API;