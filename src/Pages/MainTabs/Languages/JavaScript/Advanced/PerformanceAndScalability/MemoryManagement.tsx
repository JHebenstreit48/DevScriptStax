import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MemoryManagement = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/PerformanceAndScalability/MemoryManagement';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Memory Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryManagement;
