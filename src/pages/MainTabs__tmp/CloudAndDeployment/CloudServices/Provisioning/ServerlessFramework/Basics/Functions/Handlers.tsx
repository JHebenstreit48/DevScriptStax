import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Handlers = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/ServerlessFramework/Basics/Functions/Handlers';

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
