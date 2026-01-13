import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIsAndIntegrations = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Architecture/APIsAndIntegrations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="APIs & Integrations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIsAndIntegrations;
