import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SeedingAndLocal = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Tools/DevWorkflow/SeedingAndLocal';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="MongoDB Tools - Seeding and Local" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SeedingAndLocal;