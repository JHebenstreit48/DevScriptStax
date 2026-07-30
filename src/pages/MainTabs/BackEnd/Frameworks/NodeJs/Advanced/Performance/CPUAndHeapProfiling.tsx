import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CPUAndHeapProfiling = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/Performance/CPUAndHeapProfiling';

  return (
    <>
      <PageLayout>
        <PageTitle title="CPU & Heap Profiling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CPUAndHeapProfiling;
