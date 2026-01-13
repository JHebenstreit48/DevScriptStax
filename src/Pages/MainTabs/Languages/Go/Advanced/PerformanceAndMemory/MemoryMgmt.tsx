import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MemoryMgmt = () => {
  const markdownFilePath = 'Languages/Go/Advanced/PerformanceAndMemory/MemoryMgmt';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Memory Mgmt" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryMgmt;
