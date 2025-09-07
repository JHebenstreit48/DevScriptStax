import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// ---------- Deployment Platforms Navigation Start ----------

// ---------- Front-End Deployment Navigation Start ----------
import Netlify from '@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndNav/Netlify';
import Vercel from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndNav/Vercel";
import CloudflarePages from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndNav/CloudflarePages";
// ---------- Front-End Deployment Navigation End ----------

// ---------- Full-Stack Deployment Navigation Start ----------
import Render from '@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render';
import Railway from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway";
import Fly from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly";
// ---------- Full-Stack Deployment Navigation End ----------

// ---------- Deployment Platforms Navigation End ----------

// ---------- Serverless Computing Navigation Start ----------
import AWSLambda from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda";
import GoogleCloudFunctions from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions";
import AzureFunctions from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions";
import FirebaseFunctions from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions";
// ---------- Serverless Computing Navigation End ----------

// ---------- Edge Computing Navigation Start ----------
import CloudflareWorkers from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers";
import FastlyCompute from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute";
import AkamaiEdgeWorkers from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers";
// ---------- Edge Computing Navigation End ----------

// ---------- Provisioning Navigation Start ----------
import ServerlessFramework from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework";
import AWSCDK from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/Provisioning/AWSCDK";
import AWSSAM from "@/Navigation/IndividualNav/FullTopics/CloudAndDeployment/CloudServices/Provisioning/AWSSAM";
// ---------- Provisioning Navigation End ----------

const cloudServices: Subpage = {
  name: 'Cloud Services',
  subpages: [
    {
      name: 'Deployment Platforms',
      subpages: [
        {
          name: 'Front-End Deployment',
          subpages: [
            Netlify,
            Vercel,
            CloudflarePages,
          ]
        },
        {
          name: 'Full-Stack',
          subpages: [
            Render,
            Railway,
            Fly
          ]
        }
      ]
    },
    {
      name: 'Serverless Computing',
      subpages: [
        AWSLambda,
        GoogleCloudFunctions,
        AzureFunctions,
        FirebaseFunctions
      ]
    },
    {
      name: 'Edge Computing',
      subpages: [
        CloudflareWorkers,
        FastlyCompute,
        AkamaiEdgeWorkers,
      ]
    },
    {
      name: "Provisioning",
      subpages: [
        ServerlessFramework,
        AWSCDK,
        AWSSAM,
      ]
    }
  ]
};

export default cloudServices;