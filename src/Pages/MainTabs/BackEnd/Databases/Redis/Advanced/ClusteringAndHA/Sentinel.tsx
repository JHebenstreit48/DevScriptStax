import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Sentinel = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/ClusteringAndHA/Sentinel';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sentinel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Sentinel;
