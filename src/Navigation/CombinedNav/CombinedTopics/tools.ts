import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------- API Tools Navigation Start ----------
import Insomnia from '@/Navigation/IndividualNav/FullTopics/Tools/APITools/Insomnia';
import Postman from '@/Navigation/IndividualNav/FullTopics/Tools/APITools/Postman';
// ---------- API Tools Navigation End ----------

// ---------- CICD Tools Navigation Start ----------
import CircleCI from '@/Navigation/IndividualNav/FullTopics/Tools/CICD/CircleCI';
import Jenkins from '@/Navigation/IndividualNav/FullTopics/Tools/CICD/Jenkins';
// ---------- CICD Tools Navigation End ----------

// ---------- Code Quality Navigation Start ----------
import ESLint from '@/Navigation/IndividualNav/FullTopics/Tools/CodeQuality/ESLint';
import Prettier from '@/Navigation/IndividualNav/FullTopics/Tools/CodeQuality/Prettier';
import TSLint from '@/Navigation/IndividualNav/FullTopics/Tools/CodeQuality/TSLint';
import StandardJS from '@/Navigation/IndividualNav/FullTopics/Tools/CodeQuality/StandardJS';
// ---------- Code Quality Navigation End ----------

// -------------- Package & Bundling Start ----------------------------

// ------------- Package Management Start -------------
import Yarn from '@/Navigation/IndividualNav/FullTopics/Tools/PackageAndBundle/PackageManagement/Yarn';
import Pnpm from '@/Navigation/IndividualNav/FullTopics/Tools/PackageAndBundle/PackageManagement/Pnpm';
// -------------- Package Management End ---------------

// -------------------- Bundling Start -----------------
import Babel from '@/Navigation/IndividualNav/FullTopics/Tools/PackageAndBundle/Bundling/Babel';
import Webpack from '@/Navigation/IndividualNav/FullTopics/Tools/PackageAndBundle/Bundling/Webpack';
// -------------------- Bundling End -------------------

// ---------------- Package & Bundling End ---------------------------------

// ---------- Containerization Navigation Start ----------
import Docker from '@/Navigation/IndividualNav/FullTopics/Tools/Containerization/Docker';
import Git from '@/Navigation/IndividualNav/FullTopics/Tools/Containerization/Git'
// ---------- Containerization Navigation End ----------

const tools: Subpage = {
  name: 'Tools',
  subpages: [
    {
      name: 'API Tools',
      subpages: [
        Insomnia,
        Postman
      ]
    },
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
    {
      name: 'Containerization',
      subpages: [
        Docker,
        Git
      ]
    }
  ]
};

export default tools;