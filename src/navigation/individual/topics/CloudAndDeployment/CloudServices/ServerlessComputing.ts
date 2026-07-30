import type { Subpage } from '@/types/navigation';

import AWSLambda from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda';
import GoogleCloudFunctions from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions';
import AzureFunctions from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions';
import FirebaseFunctions from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions';

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