import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AppInsightsAndTraces = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics/Observability/AppInsightsAndTraces';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="App Insights & Traces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AppInsightsAndTraces;
