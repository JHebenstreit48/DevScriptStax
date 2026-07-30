import type { Subpage } from '@/types/navigation';

import API from '@/navigation/individual/topics/Tools/API';
import CICD from '@/navigation/individual/topics/Tools/CICD';
import CodeQuality from '@/navigation/individual/topics/Tools/CodeQuality';
import Containerization from '@/navigation/individual/topics/Tools/Containerization';
import DevTools from '@/navigation/individual/topics/Tools/DevTools';
import Editors from '@/navigation/individual/topics/Tools/Editors';
import EnvVariables from '@/navigation/individual/topics/Tools/EnvVariables';
import PackageAndBundle from '@/navigation/individual/topics/Tools/PackageAndBundle';
// import VersionControl from '@/navigation/individual/topics/Tools/VersionControl';

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