import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
