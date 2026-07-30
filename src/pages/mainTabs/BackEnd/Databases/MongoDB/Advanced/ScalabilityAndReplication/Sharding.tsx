import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Sharding = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Advanced/ScalabilityAndReplication/Sharding';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sharding" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Sharding;
