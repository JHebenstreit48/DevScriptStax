import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AppInsightsAndTraces = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Observability/AppInsightsAndTraces';

  return (
    <>
      <PageLayout>
        <PageTitle title="App Insights & Traces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AppInsightsAndTraces;
