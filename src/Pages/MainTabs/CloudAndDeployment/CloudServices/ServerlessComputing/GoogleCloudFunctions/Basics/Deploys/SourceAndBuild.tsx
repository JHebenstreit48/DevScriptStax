import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SourceAndBuild = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics/Deploys/SourceAndBuild';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Source & Build" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SourceAndBuild;
