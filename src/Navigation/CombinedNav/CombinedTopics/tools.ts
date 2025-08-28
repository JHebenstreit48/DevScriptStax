import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';


// ---------- API Tools Navigation Start ----------
// import InsomniaNavigation from '@/Navigation/IndividualNav/ToolsNav/APITools/Insomnia';
// import PostmanNavigation from '@/Navigation/IndividualNav/ToolsNav/APITools/Postman';
// ---------- API Tools Navigation End ----------

// ---------- CICD Tools Navigation Start ----------
// import CircleCINavigation from '@/Navigation/IndividualNav/ToolsNav/CICDTools/CircleCI';
// import JenkinsNavigation from '@/Navigation/IndividualNav/ToolsNav/CICDTools/Jenkins';
// ---------- CICD Tools Navigation End ----------

// ---------- Code Quality Navigation Start ----------
// import ESLintNavigation from '@/Navigation/IndividualNav/ToolsNav/CodeQuality/ESLint';
// import PrettierNavigation from '@/Navigation/IndividualNav/ToolsNav/CodeQuality/Prettier';
// import TSLintNavigation from '@/Navigation/IndividualNav/ToolsNav/CodeQuality/TSLint';
// import StandardJSNavigation from '@/Navigation/IndividualNav/ToolsNav/CodeQuality/StandardJS';
// ---------- Code Quality Navigation End ----------

// ---------- Package Management & Bundling Navigation Start ----------
// import BabelNavigation from '@/Navigation/IndividualNav/ToolsNav/PackageManagementAndBundling/Babel';
// import WebpackNavigation from '@/Navigation/IndividualNav/ToolsNav/PackageManagementAndBundling/WebpackPage';
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
      // subpages: [InsomniaNavigation, PostmanNavigation]
    },
    {
      name: 'CICD Tools',
      // subpages: [CircleCINavigation, JenkinsNavigation]
    },
    {
      name: 'Code Quality',
      subpages: [
        // ESLintNavigation,
        // PrettierNavigation,
        // TSLintNavigation,
        // StandardJSNavigation
      ]
    },
    {
      name: 'Package Management & Bundling',
      // subpages: [BabelNavigation, WebpackNavigation]
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
