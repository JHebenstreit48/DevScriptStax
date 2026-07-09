import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MemoryAndGC = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/Performance/MemoryAndGC';

  return (
    <>
      <PageLayout>
        <PageTitle title="Memory & GC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryAndGC;
