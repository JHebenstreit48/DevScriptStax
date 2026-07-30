import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Sentinel = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/ClusteringAndHA/Sentinel';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sentinel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Sentinel;
