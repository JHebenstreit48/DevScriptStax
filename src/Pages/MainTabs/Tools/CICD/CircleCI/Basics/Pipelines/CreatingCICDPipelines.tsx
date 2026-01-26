import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CreatingCICDPipelines = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Basics/Pipelines/CreatingCICDPipelines';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Creating CI/CD Pipelines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CreatingCICDPipelines;
