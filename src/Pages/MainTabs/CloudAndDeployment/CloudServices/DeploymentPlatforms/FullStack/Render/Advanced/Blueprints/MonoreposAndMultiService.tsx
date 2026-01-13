import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MonoreposAndMultiService = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/Blueprints/MonoreposAndMultiService';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Monorepos & Multi-Service" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MonoreposAndMultiService;
