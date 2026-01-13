import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIGatewaySecurityFeatures = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Gateways/APIGatewaySecurityFeatures';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API Gateway Security Features" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIGatewaySecurityFeatures;
