import type { Subpage } from '@/types/navigation';

import Docker from '@/Navigation/Individual/FullTopics/Tools/Containerization/Docker';
import Git from '@/Navigation/Individual/FullTopics/Tools/Containerization/Git';

const Containerization: Subpage = {
    name: 'Containerization',
    subpages: [
        Docker,
        Git
    ]
};

export default Containerization;