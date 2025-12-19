import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MemoryAndGC = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/Performance/MemoryAndGC';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Memory & GC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryAndGC;
