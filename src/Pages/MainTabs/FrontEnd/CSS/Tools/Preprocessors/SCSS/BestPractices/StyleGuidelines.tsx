import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StyleGuidelines = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/SCSS/BestPractices/StyleGuidelines';

  return (
    <>
      <PageLayout>
        <PageTitle title="Style Guidelines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StyleGuidelines;
