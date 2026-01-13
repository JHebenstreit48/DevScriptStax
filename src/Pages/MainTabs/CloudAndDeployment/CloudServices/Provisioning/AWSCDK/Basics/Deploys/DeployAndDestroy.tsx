import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeployAndDestroy = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Deploys/DeployAndDestroy';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Deploy & Destroy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeployAndDestroy;
