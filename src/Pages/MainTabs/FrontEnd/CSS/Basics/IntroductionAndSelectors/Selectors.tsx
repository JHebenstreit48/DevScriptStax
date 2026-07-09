import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CSSSelectors = () => {
  const markdownFilePath = 'FrontEnd/CSS/Basics/IntroductionAndSelectors/Selectors';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Selectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSSSelectors;