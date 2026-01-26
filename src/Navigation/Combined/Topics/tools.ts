import type { Subpage } from '@/types/navigation';

import API from '@/Navigation/Individual/FullTopics/Tools/API';

// ---------- CICD Tools Navigation Start ----------
import CircleCI from '@/Navigation/Individual/FullTopics/Tools/CICD/CircleCI';
import Jenkins from '@/Navigation/Individual/FullTopics/Tools/CICD/Jenkins';
// ---------- CICD Tools Navigation End ----------

// ---------- Code Quality Navigation Start ----------
import ESLint from '@/Navigation/Individual/FullTopics/Tools/CodeQuality/ESLint';
import Prettier from '@/Navigation/Individual/FullTopics/Tools/CodeQuality/Prettier';
import TSLint from '@/Navigation/Individual/FullTopics/Tools/CodeQuality/TSLint';
import StandardJS from '@/Navigation/Individual/FullTopics/Tools/CodeQuality/StandardJS';
// ---------- Code Quality Navigation End ----------

// -------------- Package & Bundling Start ----------------------------

// ------------- Package Management Start -------------
import Yarn from '@/Navigation/Individual/FullTopics/Tools/PackageAndBundle/PackageManagement/Yarn';
import Pnpm from '@/Navigation/Individual/FullTopics/Tools/PackageAndBundle/PackageManagement/Pnpm';
// -------------- Package Management End ---------------

// -------------------- Bundling Start -----------------
import Babel from '@/Navigation/Individual/FullTopics/Tools/PackageAndBundle/Bundling/Babel';
import Webpack from '@/Navigation/Individual/FullTopics/Tools/PackageAndBundle/Bundling/Webpack';
// -------------------- Bundling End -------------------

// ---------------- Package & Bundling End ---------------------------------

// --------------------- Environment Variables Navigation Start -----------------
// import EnvVariables from '@/Navigation/Individual/FullTopics/Tools/EnvVariables';
// ---------------------- Environment Variables Navigation End -------------------

import Containerization from '@/Navigation/Individual/FullTopics/Tools/Containerization';

const tools: Subpage = {
  name: 'Tools',
  subpages: [
    API,
    {
      name: 'CICD Tools',
      subpages: [
        CircleCI,
        Jenkins
      ]
    },
    {
      name: 'Code Quality',
      subpages: [
        ESLint,
        Prettier,
        TSLint,
        StandardJS
      ]
    },
    {
      name: 'Package & Bundling',
      subpages: [
        {
          name: 'Package Management',
          subpages: [
            Yarn,
            Pnpm
          ]
        },
        {
          name: 'Bundling',
          subpages: [
            Babel,
            Webpack
          ] // later: Vite, Rollup, esbuild, Parcel
        }
      ]
    },
    Containerization
    // EnvironmentVariables
  ]
};

export default tools;