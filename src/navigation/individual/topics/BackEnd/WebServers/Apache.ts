import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/WebServers/Apache/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/WebServers/Apache/Advanced';

const Apache: Subpage = {
    name: "Apache",
    subpages: [
        Basics,
        Advanced
    ]
};

export default Apache;