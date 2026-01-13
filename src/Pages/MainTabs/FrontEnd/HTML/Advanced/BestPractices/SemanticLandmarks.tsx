import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SemanticLandmarks = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/BestPractices/SemanticLandmarks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Advanced HTML - Semantic Landmarks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SemanticLandmarks;