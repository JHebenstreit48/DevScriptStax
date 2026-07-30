import type { Subpage } from '@/types/navigation';

import Foundations from '@/navigation/individual/modularized/BackEnd/APIs/Basics/HTTPClients/Foundations';
import Axios from '@/navigation/individual/modularized/BackEnd/APIs/Basics/HTTPClients/Axios';

const HTTPClients: Subpage = {
  name: 'HTTP Clients',
  subpages: [
    Foundations,
    Axios
  ]
};

export default HTTPClients;