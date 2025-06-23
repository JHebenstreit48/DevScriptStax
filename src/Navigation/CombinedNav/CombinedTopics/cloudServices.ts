import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------- Deployment Platforms Navigation Start ----------

// ---------- Front-End Deployment Navigation Start ----------
import NetlifyNavigation from '@/Navigation/IndividualNav/Granularized/CloudServices/DeploymentPlatforms/FrontEndNavigation/Netlify';
// import VercelNavigation from "@/Navigation/CloudServices/DeploymentPlatforms/FrontEnd/Vercel";
// import CloudflarePagesNavigation from "@/Navigation/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages";
// ---------- Front-End Deployment Navigation End ----------

// ---------- Full-Stack Deployment Navigation Start ----------
import RenderNavigation from '@/Navigation/IndividualNav/Granularized/CloudServices/DeploymentPlatforms/FullStackNavigation/Render';
// import RailwayNavigation from "@/Navigation/CloudServices/DeploymentPlatforms/FullStack/Railway";
// import FlyNavigation from "@/Navigation/CloudServices/DeploymentPlatforms/FullStack/Fly";
// ---------- Full-Stack Deployment Navigation End ----------

// ---------- Deployment Platforms Navigation End ----------

// ---------- Serverless Computing Navigation Start ----------
// import AWSLambdaNavigation from "@/Navigation/CloudServices/ServerlessComputing/AWSLambda";
// import GoogleCloudFunctionsNavigation from "@/Navigation/CloudServices/ServerlessComputing/GoogleCloudFunctions";
// import AzureFunctionsNavigation from "@/Navigation/CloudServices/ServerlessComputing/AzureFunctions";
// import FirebaseCloudNavigation from "@/Navigation/CloudServices/ServerlessComputing/FirebaseCloud";
// ---------- Serverless Computing Navigation End ----------

// ---------- Edge Computing Navigation Start ----------
// import CloudflareWorkersNavigation from "@/Navigation/CloudServices/EdgeComputing/CloudflareWorkers";
// ---------- Edge Computing Navigation End ----------

// ---------- Frameworks Navigation Start ----------
// import ServerlessFrameworkNavigation from "@/Navigation/CloudServices/Frameworks/ServerlessFramework";
// ---------- Frameworks Navigation End ----------

const cloudServices: Subpage = {
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

export default cloudServices;
