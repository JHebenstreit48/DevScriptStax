import type { Subpage } from '@/types/navigation';

import AWSLambda from "@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda";
import GoogleCloudFunctions from "@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions";
import AzureFunctions from "@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions";
import FirebaseFunctions from "@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions";

const ServerlessComputing: Subpage = {
  name: 'Serverless Computing',
  subpages: [
    AWSLambda,
    GoogleCloudFunctions,
    AzureFunctions,
    FirebaseFunctions
  ]
};

export default ServerlessComputing;