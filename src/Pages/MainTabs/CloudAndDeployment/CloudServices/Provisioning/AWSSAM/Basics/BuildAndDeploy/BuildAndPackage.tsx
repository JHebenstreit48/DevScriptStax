import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildAndPackage = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/BuildAndDeploy/BuildAndPackage';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Build & Package" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildAndPackage;
