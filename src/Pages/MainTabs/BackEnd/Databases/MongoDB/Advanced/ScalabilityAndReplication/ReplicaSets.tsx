import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReplicaSets = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/ScalabilityAndReplication/ReplicaSets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Replica Sets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReplicaSets;
