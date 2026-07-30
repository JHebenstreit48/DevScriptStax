import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/WebServers/Nginx/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/WebServers/Nginx/Advanced';

const Nginx: Subpage = {
    name: "Nginx",
    subpages: [
        Basics,
        Advanced
    ]
};

export default Nginx;