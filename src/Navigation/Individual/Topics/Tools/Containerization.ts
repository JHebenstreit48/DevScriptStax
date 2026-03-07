import type { Subpage } from '@/types/navigation';

import Docker from '@/Navigation/Individual/Topics/Tools/Containerization/Docker';
import Git from '@/Navigation/Individual/Topics/Tools/Containerization/Git';

const Containerization: Subpage = {
    name: 'Containerization',
    subpages: [
        Docker,
        Git
    ]
};

export default Containerization;