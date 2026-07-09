import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const APIIntegrations = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Advanced/AdvancedFeatures/APIIntegrations';

  return (
    <>
      <PageLayout>
        <PageTitle title="API Integrations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIIntegrations;
