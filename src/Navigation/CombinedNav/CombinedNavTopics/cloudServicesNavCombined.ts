import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------- Deployment Platforms Navigation Start ----------

// ---------- Front-End Deployment Navigation Start ----------
import NetlifyNavigation from '@/Navigation/IndividualNav/CloudServicesNavigation/DeploymentPlatformsNavigation/FrontEndNavigation/Netlify';
// import VercelNavigation from "@/Navigation/CloudServicesNavigation/DeploymentPlatforms/FrontEnd/Vercel";
// import CloudflarePagesNavigation from "@/Navigation/CloudServicesNavigation/DeploymentPlatforms/FrontEnd/CloudflarePages";
// ---------- Front-End Deployment Navigation End ----------

// ---------- Full-Stack Deployment Navigation Start ----------
import RenderNavigation from '@/Navigation/IndividualNav/CloudServicesNavigation/DeploymentPlatformsNavigation/FullStackNavigation/Render';
// import RailwayNavigation from "@/Navigation/CloudServicesNavigation/DeploymentPlatforms/FullStack/Railway";
// import FlyNavigation from "@/Navigation/CloudServicesNavigation/DeploymentPlatforms/FullStack/Fly";
// ---------- Full-Stack Deployment Navigation End ----------

// ---------- Deployment Platforms Navigation End ----------

// ---------- Serverless Computing Navigation Start ----------
// import AWSLambdaNavigation from "@/Navigation/CloudServicesNavigation/ServerlessComputing/AWSLambda";
// import GoogleCloudFunctionsNavigation from "@/Navigation/CloudServicesNavigation/ServerlessComputing/GoogleCloudFunctions";
// import AzureFunctionsNavigation from "@/Navigation/CloudServicesNavigation/ServerlessComputing/AzureFunctions";
// import FirebaseCloudNavigation from "@/Navigation/CloudServicesNavigation/ServerlessComputing/FirebaseCloud";
// ---------- Serverless Computing Navigation End ----------

// ---------- Edge Computing Navigation Start ----------
// import CloudflareWorkersNavigation from "@/Navigation/CloudServicesNavigation/EdgeComputing/CloudflareWorkers";
// ---------- Edge Computing Navigation End ----------

// ---------- Frameworks Navigation Start ----------
// import ServerlessFrameworkNavigation from "@/Navigation/CloudServicesNavigation/Frameworks/ServerlessFramework";
// ---------- Frameworks Navigation End ----------

const cloudServicesNav: Page = {
  name: 'Cloud Services',
  subpages: [
    {
      name: 'Deployment Platforms',
      subpages: [
        {
          name: 'Front-End Deployment',
          subpages: [
            NetlifyNavigation
            // VercelNavigation,
            // CloudflarePagesNavigation,
          ]
        },
        {
          name: 'Full-Stack Deployment',
          subpages: [
            RenderNavigation
            // RailwayNavigation,
            // FlyNavigation,
          ]
        }
      ]
    },
    {
      name: 'Serverless Computing',
      subpages: [
        // AWSLambdaNavigation,
        // GoogleCloudFunctionsNavigation,
        // AzureFunctionsNavigation,
        // FirebaseCloudNavigation,
      ]
    },
    {
      name: 'Edge Computing',
      subpages: [
        // CloudflareWorkersNavigation,
      ]
    },
    {
      name: 'Frameworks',
      subpages: [
        // ServerlessFrameworkNavigation,
      ]
    }
  ]
};

export default cloudServicesNav;
