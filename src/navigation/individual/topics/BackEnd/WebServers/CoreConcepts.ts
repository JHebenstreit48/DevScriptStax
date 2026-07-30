import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/WebServers/CoreConcepts/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/WebServers/CoreConcepts/Advanced';

const CoreConcepts: Subpage = {
    name: "Core Concepts",
    subpages: [
        Basics,
        Advanced
    ]
};

export default CoreConcepts;