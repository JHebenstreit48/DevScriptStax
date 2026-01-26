import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CreatingPipelines = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Pipelines/CreatingPipelines';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Creating Pipelines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CreatingPipelines;
