import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
