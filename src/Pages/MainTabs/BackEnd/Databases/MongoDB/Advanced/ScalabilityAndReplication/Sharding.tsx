import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Sharding = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/ScalabilityAndReplication/Sharding';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sharding" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Sharding;
