import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntroAndSyntax = () => {
  const markdownFilePath = 'Languages/Rust/Basics/Fundamentals/IntroAndSyntax';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Intro & Syntax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroAndSyntax;
