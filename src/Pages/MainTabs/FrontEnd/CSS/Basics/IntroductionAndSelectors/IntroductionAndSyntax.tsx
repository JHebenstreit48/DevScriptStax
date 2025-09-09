import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntroductionAndSyntax = () => {
  const markdownFilePath = 'FrontEndNotes/CSSNotes/Basics/IntroductionAndSelectors/IntroductionAndSyntax';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Introduction and Syntax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroductionAndSyntax;