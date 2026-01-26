import type { Subpage } from '@/types/navigation';

import API from '@/Navigation/Individual/FullTopics/Tools/API';
import CICD from '@/Navigation/Individual/FullTopics/Tools/CICD';
import CodeQuality from '@/Navigation/Individual/FullTopics/Tools/CodeQuality';
import Containerization from '@/Navigation/Individual/FullTopics/Tools/Containerization';
// import DevTools from '@/Navigation/Individual/FullTopics/Tools/DevTools';
import Editors from '@/Navigation/Individual/FullTopics/Tools/Editors';
import EnvVariables from '@/Navigation/Individual/FullTopics/Tools/EnvVariables';
import PackageAndBundle from '@/Navigation/Individual/FullTopics/Tools/PackageAndBundle';
// import VersionControl from '@/Navigation/Individual/FullTopics/Tools/VersionControl';

const tools: Subpage = {
  name: 'Tools',
  subpages: [
    API,
    CICD,
    CodeQuality,
    Containerization,
    // DevTools,
    Editors,
    EnvVariables,
    PackageAndBundle,
    // later: Vite, Rollup, esbuild, Parcel
  ]
};

export default tools;