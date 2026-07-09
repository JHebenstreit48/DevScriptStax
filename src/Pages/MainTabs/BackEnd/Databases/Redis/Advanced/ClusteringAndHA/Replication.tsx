import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
