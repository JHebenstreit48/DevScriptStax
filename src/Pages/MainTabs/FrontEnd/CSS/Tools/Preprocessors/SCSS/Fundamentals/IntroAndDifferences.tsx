import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntroAndDifferences = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/SCSS/Fundamentals/IntroAndDifferences';

  return (
    <>
      <PageLayout>
        <PageTitle title="Intro & Differences" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroAndDifferences;
