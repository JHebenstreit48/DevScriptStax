import type { Subpage } from '@/types/navigation';

import ChangeDetection from '@/navigation/individual/modularized/FrontEnd/Angular/Advanced/ChangeDetection';
import Performance from '@/navigation/individual/modularized/FrontEnd/Angular/Advanced/Performance';
import RxJSAndReactive from '@/navigation/individual/modularized/FrontEnd/Angular/Advanced/RxJSAndReactiveProgram';
import Animations from '@/navigation/individual/modularized/FrontEnd/Angular/Advanced/Animations';
import TSIntegration from '@/navigation/individual/modularized/FrontEnd/Angular/Advanced/TSIntegration';
import Security from '@/navigation/individual/modularized/FrontEnd/Angular/Advanced/Security';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    ChangeDetection,
    Performance,
    RxJSAndReactive,
    Animations,
    TSIntegration,
    Security,
  ],
};

export default Advanced;