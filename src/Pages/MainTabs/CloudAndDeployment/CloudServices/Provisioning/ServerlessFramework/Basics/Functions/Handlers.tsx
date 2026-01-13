import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Handlers = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Functions/Handlers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Handlers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Handlers;
