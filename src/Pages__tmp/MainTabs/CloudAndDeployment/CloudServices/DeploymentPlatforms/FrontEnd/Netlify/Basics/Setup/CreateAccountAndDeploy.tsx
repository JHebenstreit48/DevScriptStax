import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CreateAccountAndDeploy = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Setup/CreateAccount';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud Services - Deployment - Front End - Netlify - Create Account & First Deploy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CreateAccountAndDeploy;