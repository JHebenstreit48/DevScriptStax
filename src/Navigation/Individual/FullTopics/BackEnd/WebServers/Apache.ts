import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/WebServers/Apache/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/WebServers/Apache/Advanced';

const Apache: Subpage = {
    name: "Apache",
    subpages: [
        Basics,
        Advanced
    ]
};

export default Apache;