import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
