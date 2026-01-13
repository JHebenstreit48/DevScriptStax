import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AlertsAndNotifications = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/Observability/AlertsAndNotifications';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Alerts & Notifications" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AlertsAndNotifications;
