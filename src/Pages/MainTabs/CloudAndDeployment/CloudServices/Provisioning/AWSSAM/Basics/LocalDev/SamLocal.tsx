import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SamLocal = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/LocalDev/SamLocal';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="sam local" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SamLocal;
