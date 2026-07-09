import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SCANAndPatterns = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Basics/WorkingWithData/SCANAndPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="SCAN & Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SCANAndPatterns;
