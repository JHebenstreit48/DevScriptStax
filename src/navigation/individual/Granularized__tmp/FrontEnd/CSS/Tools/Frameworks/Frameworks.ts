import type { Subpage } from '@/types/navigation';

import Bootstrap from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Combined/Bootstrap';
import ReactBootstrap from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Combined/ReactBootstrap';
import Tailwind from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Combined/Tailwind';

const Frameworks: Subpage = {
    name: "Frameworks",
    subpages: [
        Bootstrap,
        ReactBootstrap,
        Tailwind
    ]
};

export default Frameworks;