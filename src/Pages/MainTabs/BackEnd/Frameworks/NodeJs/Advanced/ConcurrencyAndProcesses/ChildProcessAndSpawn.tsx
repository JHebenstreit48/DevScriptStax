import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ChildProcessAndSpawn = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/ConcurrencyAndProcesses/ChildProcessAndSpawn';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="child_process & spawn" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ChildProcessAndSpawn;
