import type { Subpage } from '@/types/navigation';

import API from '@/Navigation/Individual/Topics/Tools/API';
import CICD from '@/Navigation/Individual/Topics/Tools/CICD';
import CodeQuality from '@/Navigation/Individual/Topics/Tools/CodeQuality';
import Containerization from '@/Navigation/Individual/Topics/Tools/Containerization';
import DevTools from '@/Navigation/Individual/Topics/Tools/DevTools';
import Editors from '@/Navigation/Individual/Topics/Tools/Editors';
import EnvVariables from '@/Navigation/Individual/Topics/Tools/EnvVariables';
import PackageAndBundle from '@/Navigation/Individual/Topics/Tools/PackageAndBundle';
// import VersionControl from '@/Navigation/Individual/Topics/Tools/VersionControl';

const tools: Subpage = {
  name: 'Tools',
  subpages: [
    API,
    CICD,
    CodeQuality,
    Containerization,
    DevTools,
    Editors,
    EnvVariables,
    PackageAndBundle,
    // later: Vite, Rollup, esbuild, Parcel
  ]
};

export default tools;