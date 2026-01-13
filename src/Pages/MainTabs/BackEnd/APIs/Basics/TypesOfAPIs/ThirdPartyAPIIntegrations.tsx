import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ThirdPartyAPIIntegrations = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/TypesOfAPIs/ThirdPartyAPIIntegrations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Third-Party API Integrations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThirdPartyAPIIntegrations;
