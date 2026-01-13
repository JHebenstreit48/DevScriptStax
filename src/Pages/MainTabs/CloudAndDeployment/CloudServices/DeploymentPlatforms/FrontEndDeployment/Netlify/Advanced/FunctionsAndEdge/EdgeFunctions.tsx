import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EdgeFunctions = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Netlify/Advanced/FunctionsAndEdge/EdgeFunctions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Edge Functions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EdgeFunctions;
