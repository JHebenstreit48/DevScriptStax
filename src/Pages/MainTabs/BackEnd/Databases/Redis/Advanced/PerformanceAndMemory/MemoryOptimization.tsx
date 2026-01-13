import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MemoryOptimization = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/PerformanceAndMemory/MemoryOptimization';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Memory Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryOptimization;
