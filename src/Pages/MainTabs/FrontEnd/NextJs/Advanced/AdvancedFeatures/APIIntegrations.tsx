import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIIntegrations = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Advanced/AdvancedFeatures/APIIntegrations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API Integrations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIIntegrations;
