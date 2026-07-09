import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GCAndMemory = () => {
  const markdownFilePath = 'Languages/Ruby/Advanced/PerfAndTooling/GCAndMemory';

  return (
    <>
      <PageLayout>
        <PageTitle title="GC & Memory" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GCAndMemory;
