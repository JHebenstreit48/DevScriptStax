import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Bootstrap from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/BootstrapsAndTailwind/Bootstrap';
import ReactBootstrap from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/BootstrapsAndTailwind/ReactBootstrap';
import Tailwind from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/BootstrapsAndTailwind/Tailwind';

const Frameworks: Subpage = {
    name: "Frameworks",
    subpages: [
        Bootstrap,
        ReactBootstrap,
        Tailwind
    ]
};

export default Frameworks;