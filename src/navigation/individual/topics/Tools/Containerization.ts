import type { Subpage } from '@/types/navigation';

import Docker from '@/navigation/individual/topics/Tools/Containerization/Docker';
import Git from '@/navigation/individual/topics/Tools/Containerization/Git';

const Containerization: Subpage = {
    name: 'Containerization',
    subpages: [
        Docker,
        Git
    ]
};

export default Containerization;