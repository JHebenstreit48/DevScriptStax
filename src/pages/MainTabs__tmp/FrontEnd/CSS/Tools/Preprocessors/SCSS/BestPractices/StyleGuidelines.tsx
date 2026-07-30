import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
