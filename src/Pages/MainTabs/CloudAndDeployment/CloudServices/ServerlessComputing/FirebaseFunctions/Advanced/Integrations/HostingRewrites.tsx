import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HostingRewrites = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced/Integrations/HostingRewrites';

  return (
    <>
      <PageLayout>
        <PageTitle title="Hosting Rewrites" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HostingRewrites;
