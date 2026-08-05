import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
