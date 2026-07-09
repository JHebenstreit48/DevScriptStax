import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
