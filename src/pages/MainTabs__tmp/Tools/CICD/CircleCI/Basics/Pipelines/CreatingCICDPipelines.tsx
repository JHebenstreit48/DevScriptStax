import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CreatingCICDPipelines = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Basics/Pipelines/CreatingCICDPipelines';

  return (
    <>
      <PageLayout>
        <PageTitle title="Creating CI/CD Pipelines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CreatingCICDPipelines;
