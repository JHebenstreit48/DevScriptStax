import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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