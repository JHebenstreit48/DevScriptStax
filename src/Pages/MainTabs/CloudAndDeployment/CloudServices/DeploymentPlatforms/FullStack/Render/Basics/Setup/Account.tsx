import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Account = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup/Account';

  return (
    <>
      <PageLayout>
        <PageTitle title="Account" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Account;
