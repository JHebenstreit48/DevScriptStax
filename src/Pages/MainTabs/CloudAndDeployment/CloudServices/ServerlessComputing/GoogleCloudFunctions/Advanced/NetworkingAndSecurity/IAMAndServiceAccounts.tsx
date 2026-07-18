import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IAMAndServiceAccounts = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/NetworkingAndSecurity/IAMAndServiceAccounts';

  return (
    <>
      <PageLayout>
        <PageTitle title="IAM & Service Accounts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IAMAndServiceAccounts;
