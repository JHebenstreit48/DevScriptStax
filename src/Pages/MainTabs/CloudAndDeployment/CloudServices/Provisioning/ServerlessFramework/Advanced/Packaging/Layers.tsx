import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Layers = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced/Packaging/Layers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Layers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Layers;
