import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
