import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MemoryOptimization = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/PerformanceAndMemory/MemoryOptimization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Memory Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryOptimization;
