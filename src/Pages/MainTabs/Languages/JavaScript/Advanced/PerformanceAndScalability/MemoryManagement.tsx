import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MemoryManagement = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/PerformanceAndScalability/MemoryManagement';

  return (
    <>
      <PageLayout>
        <PageTitle title="Memory Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryManagement;
