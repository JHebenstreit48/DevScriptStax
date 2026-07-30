import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CloudTasksAndWorkflows = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Integrations/CloudTasksAndWorkflows';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud Tasks & Workflows" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CloudTasksAndWorkflows;
