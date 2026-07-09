import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const APIGatewaySecurityFeatures = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Gateways/APIGatewaySecurityFeatures';

  return (
    <>
      <PageLayout>
        <PageTitle title="API Gateway Security Features" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIGatewaySecurityFeatures;
