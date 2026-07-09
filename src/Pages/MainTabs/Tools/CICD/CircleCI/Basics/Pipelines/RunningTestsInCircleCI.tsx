import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RunningTestsInCircleCI = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Basics/Pipelines/RunningTestsInCircleCI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Running Tests in CircleCI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RunningTestsInCircleCI;
