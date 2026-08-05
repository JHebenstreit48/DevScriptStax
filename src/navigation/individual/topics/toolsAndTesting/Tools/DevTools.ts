import type { Subpage } from '@/types/navigation';

import Chrome from '@/navigation/individual/topics/toolsAndTesting/Tools/DevTools/Chrome';

const DevTools: Subpage = {
    name: 'DevTools',
    subpages: [
        Chrome,
    ]
};

export default DevTools;