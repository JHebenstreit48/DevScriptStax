import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IAMAndServiceAccounts = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/NetworkingAndSecurity/IAMAndServiceAccounts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IAM & Service Accounts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IAMAndServiceAccounts;
