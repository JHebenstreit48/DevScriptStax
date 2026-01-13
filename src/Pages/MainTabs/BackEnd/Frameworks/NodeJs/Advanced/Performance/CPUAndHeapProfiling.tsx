import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CPUAndHeapProfiling = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/Performance/CPUAndHeapProfiling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CPU & Heap Profiling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CPUAndHeapProfiling;
