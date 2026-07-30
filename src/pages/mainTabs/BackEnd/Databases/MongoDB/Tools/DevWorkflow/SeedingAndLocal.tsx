import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SeedingAndLocal = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Tools/DevWorkflow/SeedingAndLocal';

  return (
    <>
      <PageLayout>
        <PageTitle title="MongoDB Tools - Seeding and Local" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SeedingAndLocal;