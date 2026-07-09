import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CreatingPipelines = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Pipelines/CreatingPipelines';

  return (
    <>
      <PageLayout>
        <PageTitle title="Creating Pipelines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CreatingPipelines;
