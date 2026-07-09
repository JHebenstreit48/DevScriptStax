import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InitProject = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers/Basics/Setup/InitProject';

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
