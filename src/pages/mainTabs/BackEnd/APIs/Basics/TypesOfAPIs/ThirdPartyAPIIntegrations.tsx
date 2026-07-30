import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ThirdPartyAPIIntegrations = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/TypesOfAPIs/ThirdPartyAPIIntegrations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Third-Party API Integrations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThirdPartyAPIIntegrations;
