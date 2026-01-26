import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RunningTestsInCircleCI = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Basics/Pipelines/RunningTestsInCircleCI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Running Tests in CircleCI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RunningTestsInCircleCI;
