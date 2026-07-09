import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RemoveAndRollback = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Deploys/RemoveAndRollback';

  return (
    <>
      <PageLayout>
        <PageTitle title="Remove & Rollback" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RemoveAndRollback;
