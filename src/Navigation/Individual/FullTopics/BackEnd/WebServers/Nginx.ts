import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/WebServers/Nginx/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/WebServers/Nginx/Advanced';

const Nginx: Subpage = {
    name: "Nginx",
    subpages: [
        Basics,
        Advanced
    ]
};

export default Nginx;