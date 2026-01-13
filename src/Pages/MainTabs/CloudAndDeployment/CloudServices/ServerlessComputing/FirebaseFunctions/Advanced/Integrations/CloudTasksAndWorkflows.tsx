import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CloudTasksAndWorkflows = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Integrations/CloudTasksAndWorkflows';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cloud Tasks & Workflows" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CloudTasksAndWorkflows;
