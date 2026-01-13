import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Credentials = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/Setup/Credentials';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Credentials" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Credentials;
