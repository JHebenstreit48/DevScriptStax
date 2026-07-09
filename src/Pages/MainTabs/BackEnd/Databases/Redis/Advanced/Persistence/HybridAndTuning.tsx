import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HybridAndTuning = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/Persistence/HybridAndTuning';

  return (
    <>
      <PageLayout>
        <PageTitle title="Hybrid & Tuning" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HybridAndTuning;
