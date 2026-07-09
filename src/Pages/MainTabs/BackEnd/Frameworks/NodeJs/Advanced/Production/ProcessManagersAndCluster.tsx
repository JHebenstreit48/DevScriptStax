import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProcessManagersAndCluster = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/Production/ProcessManagersAndCluster';

  return (
    <>
      <PageLayout>
        <PageTitle title="Process Managers & Cluster" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProcessManagersAndCluster;
