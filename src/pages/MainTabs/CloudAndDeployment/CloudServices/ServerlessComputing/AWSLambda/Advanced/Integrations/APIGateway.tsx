import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const APIGateway = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/AWSLambda/Advanced/Integrations/APIGateway';

  return (
    <>
      <PageLayout>
        <PageTitle title="API Gateway" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIGateway;
