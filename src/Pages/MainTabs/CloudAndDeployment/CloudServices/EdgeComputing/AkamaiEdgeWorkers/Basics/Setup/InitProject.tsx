import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InitProject = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Setup/InitProject';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Init Project" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InitProject;
