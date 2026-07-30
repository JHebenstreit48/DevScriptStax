import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/Frameworks/WebSockets/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/Frameworks/WebSockets/Advanced';

const WebSockets: Subpage = {
  name: 'WebSockets',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default WebSockets;