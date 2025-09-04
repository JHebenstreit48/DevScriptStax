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

// ---------- Package Management & Bundling Navigation Start ----------
// import Babel from '@/Navigation/IndividualNav/ToolsNav/PackageManagementAndBundling/Babel';
// import Webpack from '@/Navigation/IndividualNav/ToolsNav/PackageManagementAndBundling/WebpackPage';
// ---------- Package Management & Bundling Navigation End ----------

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
      name: 'Package Management & Bundling',
      // subpages: [Babel, Webpack]
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
