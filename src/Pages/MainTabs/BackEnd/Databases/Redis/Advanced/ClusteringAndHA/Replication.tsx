import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Replication = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/ClusteringAndHA/Replication';

  return (
    <>
      <PageLayout>
        <PageTitle title="Replication" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Replication;
