import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/WebServers/CoreConcepts/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/WebServers/CoreConcepts/Advanced';

const CoreConcepts: Subpage = {
    name: "Core Concepts",
    subpages: [
        Basics,
        Advanced
    ]
};

export default CoreConcepts;