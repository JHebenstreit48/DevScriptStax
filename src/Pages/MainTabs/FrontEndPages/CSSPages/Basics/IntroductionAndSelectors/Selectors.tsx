import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CSSSelectors = () => {
  const markdownFilePath = 'FrontEndNotes/CSSNotes/Basics/IntroductionAndSelectors/Selectors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Selectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSSSelectors;