import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';


// ---------- API Tools Navigation Start ----------
// import Insomnia from '@/Navigation/IndividualNav/ToolsNav/APITools/Insomnia';
// import Postman from '@/Navigation/IndividualNav/ToolsNav/APITools/Postman';
// ---------- API Tools Navigation End ----------

// ---------- CICD Tools Navigation Start ----------
import CircleCI from '@/Navigation/IndividualNav/FullTopics/ToolsNav/CICD/CircleCI';
import Jenkins from '@/Navigation/IndividualNav/FullTopics/ToolsNav/CICD/Jenkins';
// ---------- CICD Tools Navigation End ----------

// ---------- Code Quality Navigation Start ----------
// import ESLint from '@/Navigation/IndividualNav/ToolsNav/CodeQuality/ESLint';
// import Prettier from '@/Navigation/IndividualNav/ToolsNav/CodeQuality/Prettier';
// import TSLint from '@/Navigation/IndividualNav/ToolsNav/CodeQuality/TSLint';
// import StandardJS from '@/Navigation/IndividualNav/ToolsNav/CodeQuality/StandardJS';
// ---------- Code Quality Navigation End ----------

// -------------- Package & Bundling Start ----------------------------

// ------------- Package Management Start -------------
// import Yarn from '@/Navigation/IndividualNav/FullTopics/ToolsNav/PackageAndBundle/PackageManagement/Yarn';
// import Pnpm from '@/Navigation/IndividualNav/FullTopics/ToolsNav/PackageAndBundle/PackageManagement/Pnpm';
// -------------- Package Management End ---------------

// -------------------- Bundling Start -----------------
import Babel from '@/Navigation/IndividualNav/FullTopics/ToolsNav/PackageAndBundle/Bundling/Babel';
import Webpack from '@/Navigation/IndividualNav/FullTopics/ToolsNav/PackageAndBundle/Bundling/WebpackNav';
// -------------------- Bundling End -------------------

// ---------------- Package & Bundling End ---------------------------------

// ---------- Containerization Navigation Start ----------
import Docker from '@/Navigation/IndividualNav/FullTopics/ToolsNav/Containerization/Docker';
import Git from '@/Navigation/IndividualNav/FullTopics/ToolsNav/Containerization/Git'
// ---------- Containerization Navigation End ----------

const tools: Subpage = {
  name: 'Tools',
  subpages: [
    {
      name: 'API Tools',
      // subpages: [Insomnia, Postman]
    },
    {
      name: 'CICD Tools',
      subpages: [CircleCI, Jenkins]
    },
    {
      name: 'Code Quality',
      subpages: [
        // ESLint,
        // Prettier,
        // TSLint,
        // StandardJS
      ]
    },
    {
      name: 'Package & Bundling',
      subpages: [
        {
          name: 'Package Management',
          // subpages: [Yarn, Pnpm]
        },
        {
          name: 'Bundling',
          subpages: [Babel, Webpack] // later: Vite, Rollup, esbuild, Parcel
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