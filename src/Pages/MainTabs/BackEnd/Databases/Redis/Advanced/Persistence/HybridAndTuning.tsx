import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HybridAndTuning = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/Persistence/HybridAndTuning';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Hybrid & Tuning" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HybridAndTuning;
