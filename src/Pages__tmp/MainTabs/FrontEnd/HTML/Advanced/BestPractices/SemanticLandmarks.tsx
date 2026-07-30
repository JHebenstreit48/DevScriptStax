import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SemanticLandmarks = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/BestPractices/SemanticLandmarks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Advanced HTML - Semantic Landmarks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SemanticLandmarks;