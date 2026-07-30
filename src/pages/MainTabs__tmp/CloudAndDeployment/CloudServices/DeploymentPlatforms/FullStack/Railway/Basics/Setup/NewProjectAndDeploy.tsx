import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NewProjectAndDeploy = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Setup/NewProjectAndDeploy';

  return (
    <>
      <PageLayout>
        <PageTitle title="New Project & Deploy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NewProjectAndDeploy;
