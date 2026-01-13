import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProcessManagersAndCluster = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/Production/ProcessManagersAndCluster';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Process Managers & Cluster" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProcessManagersAndCluster;
