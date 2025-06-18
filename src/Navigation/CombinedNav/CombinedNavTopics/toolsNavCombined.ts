import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------- API Tools Navigation Start ----------
import InsomniaNavigation from '@/Navigation/IndividualNav/ToolsNavigation/APITools/Insomnia';
import PostmanNavigation from '@/Navigation/IndividualNav/ToolsNavigation/APITools/Postman';
// ---------- API Tools Navigation End ----------

// ---------- CICD Tools Navigation Start ----------
import CircleCINavigation from '@/Navigation/IndividualNav/ToolsNavigation/CICDTools/CircleCI';
import JenkinsNavigation from '@/Navigation/IndividualNav/ToolsNavigation/CICDTools/Jenkins';
// ---------- CICD Tools Navigation End ----------

// ---------- Code Quality Navigation Start ----------
import ESLintNavigation from '@/Navigation/IndividualNav/ToolsNavigation/CodeQuality/ESLint';
import PrettierNavigation from '@/Navigation/IndividualNav/ToolsNavigation/CodeQuality/Prettier';
import TSLintNavigation from '@/Navigation/IndividualNav/ToolsNavigation/CodeQuality/TSLint';
import StandardJSNavigation from '@/Navigation/IndividualNav/ToolsNavigation/CodeQuality/StandardJS';
// ---------- Code Quality Navigation End ----------

// ---------- Package Management & Bundling Navigation Start ----------
import BabelNavigation from '@/Navigation/IndividualNav/ToolsNavigation/PackageManagementAndBundling/Babel';
import WebpackNavigation from '@/Navigation/IndividualNav/ToolsNavigation/PackageManagementAndBundling/WebpackPage';
// ---------- Package Management & Bundling Navigation End ----------

// ---------- Containerization Navigation Start ----------
import DockerNavigation from '@/Navigation/IndividualNav/ToolsNavigation/Containerization/Docker';
import GitNavigation from '@/Navigation/IndividualNav/ToolsNavigation/Containerization/GitNavigation/Basics';
// ---------- Containerization Navigation End ----------

const toolsNav: Page = {
  name: 'Tools',
  subpages: [
    {
      name: 'API Tools',
      subpages: [InsomniaNavigation, PostmanNavigation]
    },
    {
      name: 'CICD Tools',
      subpages: [CircleCINavigation, JenkinsNavigation]
    },
    {
      name: 'Code Quality',
      subpages: [
        ESLintNavigation,
        PrettierNavigation,
        TSLintNavigation,
        StandardJSNavigation
      ]
    },
    {
      name: 'Package Management & Bundling',
      subpages: [BabelNavigation, WebpackNavigation]
    },
    {
      name: 'Containerization',
      subpages: [DockerNavigation, GitNavigation]
    }
  ]
};

export default toolsNav;
