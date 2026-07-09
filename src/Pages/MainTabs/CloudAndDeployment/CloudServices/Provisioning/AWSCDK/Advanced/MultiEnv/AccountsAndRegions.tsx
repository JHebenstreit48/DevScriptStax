import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AccountsAndRegions = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/MultiEnv/AccountsAndRegions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Accounts & Regions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AccountsAndRegions;
