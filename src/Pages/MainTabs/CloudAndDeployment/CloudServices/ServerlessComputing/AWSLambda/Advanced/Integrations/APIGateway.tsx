import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIGateway = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/Integrations/APIGateway';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API Gateway" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIGateway;
