import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InitProject = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Setup/InitProject';

  return (
    <>
      <PageLayout>
        <PageTitle title="Init Project" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InitProject;
