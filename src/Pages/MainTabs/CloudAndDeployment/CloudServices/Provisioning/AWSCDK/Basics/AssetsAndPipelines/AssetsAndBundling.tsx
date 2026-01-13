import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AssetsAndBundling = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/AssetsAndPipelines/AssetsAndBundling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Assets & Bundling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssetsAndBundling;
