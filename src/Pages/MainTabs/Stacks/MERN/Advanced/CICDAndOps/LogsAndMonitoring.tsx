import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LogsAndMonitoring = () => {
  const markdownFilePath = 'Stacks/MERN/Advanced/CICDAndOps/LogsAndMonitoring';

  return (
    <>
      <PageLayout>
        <PageTitle title="Logs & Monitoring" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LogsAndMonitoring;
