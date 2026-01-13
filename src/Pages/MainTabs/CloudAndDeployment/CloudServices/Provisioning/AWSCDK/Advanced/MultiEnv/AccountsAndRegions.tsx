import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AccountsAndRegions = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/MultiEnv/AccountsAndRegions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Accounts & Regions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AccountsAndRegions;
