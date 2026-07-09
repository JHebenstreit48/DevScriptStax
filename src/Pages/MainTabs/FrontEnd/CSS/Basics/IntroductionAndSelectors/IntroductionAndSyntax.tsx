import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntroductionAndSyntax = () => {
  const markdownFilePath = 'FrontEnd/CSS/Basics/IntroductionAndSelectors/IntroductionAndSyntax';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Introduction and Syntax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroductionAndSyntax;