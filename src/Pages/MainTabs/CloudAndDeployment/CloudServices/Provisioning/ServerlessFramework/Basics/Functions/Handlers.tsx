import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Handlers = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Functions/Handlers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Handlers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Handlers;
