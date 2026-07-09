import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnderstandingPipelines = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Pipelines/UnderstandingPipelines';

  return (
    <>
      <PageLayout>
        <PageTitle title="Understanding Pipelines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnderstandingPipelines;
