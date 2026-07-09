import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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