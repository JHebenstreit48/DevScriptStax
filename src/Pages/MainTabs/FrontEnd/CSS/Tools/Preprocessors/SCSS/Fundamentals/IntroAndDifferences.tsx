import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntroAndDifferences = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/SCSS/Fundamentals/IntroAndDifferences';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Intro & Differences" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroAndDifferences;
