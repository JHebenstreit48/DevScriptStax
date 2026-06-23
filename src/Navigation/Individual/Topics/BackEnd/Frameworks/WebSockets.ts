import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/WebSockets/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/WebSockets/Advanced';

const WebSockets: Subpage = {
  name: 'WebSockets',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default WebSockets;