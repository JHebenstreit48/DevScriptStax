import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ChildProcessAndSpawn = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/ConcurrencyAndProcesses/ChildProcessAndSpawn';

  return (
    <>
      <PageLayout>
        <PageTitle title="child_process & spawn" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ChildProcessAndSpawn;
