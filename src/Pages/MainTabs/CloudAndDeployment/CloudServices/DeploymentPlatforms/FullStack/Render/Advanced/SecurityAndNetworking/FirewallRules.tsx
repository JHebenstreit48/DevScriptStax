import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FirewallRules = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/SecurityAndNetworking/FirewallRules';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Firewall Rules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FirewallRules;
