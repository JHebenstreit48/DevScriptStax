import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CreateAccount = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics/Setup/CreateAccount';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Create Account" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CreateAccount;
