import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntroductionToCircleCI = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Basics/Fundamentals/IntroductionToCircleCI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Introduction to CircleCI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroductionToCircleCI;
