import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Account = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup/Account';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Account" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Account;
