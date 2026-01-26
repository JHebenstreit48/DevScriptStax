import type { Subpage } from '@/types/navigation';

import Insomnia from '@/Navigation/Individual/FullTopics/Tools/API/Insomnia';
import Postman from '@/Navigation/Individual/FullTopics/Tools/API/Postman';

const API: Subpage = {
  name: 'API',
  subpages: [
    Insomnia,
    Postman
  ],
};

export default API;