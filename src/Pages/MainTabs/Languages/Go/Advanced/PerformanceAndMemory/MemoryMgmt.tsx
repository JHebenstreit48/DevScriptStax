import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MemoryMgmt = () => {
  const markdownFilePath = 'Languages/Go/Advanced/PerformanceAndMemory/MemoryMgmt';

  return (
    <>
      <PageLayout>
        <PageTitle title="Memory Mgmt" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryMgmt;
