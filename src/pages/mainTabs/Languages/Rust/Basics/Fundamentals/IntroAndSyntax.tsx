import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IntroAndSyntax = () => {
  const markdownFilePath = 'Languages/Rust/Basics/Fundamentals/IntroAndSyntax';

  return (
    <>
      <PageLayout>
        <PageTitle title="Intro & Syntax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroAndSyntax;
