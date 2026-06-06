import type { Subpage } from '@/types/navigation';

import Foundations from '@/Navigation/Individual/Granularized/BackEnd/APIs/Basics/HTTPClients/Foundations';
import Axios from '@/Navigation/Individual/Granularized/BackEnd/APIs/Basics/HTTPClients/Axios';

const HTTPClients: Subpage = {
  name: 'HTTP Clients',
  subpages: [
    Foundations,
    Axios
  ]
};

export default HTTPClients;