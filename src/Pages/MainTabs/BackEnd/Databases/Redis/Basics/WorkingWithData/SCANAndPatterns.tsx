import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SCANAndPatterns = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Basics/WorkingWithData/SCANAndPatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SCAN & Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SCANAndPatterns;
