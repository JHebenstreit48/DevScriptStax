import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SamLocal = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/LocalDev/SamLocal';

  return (
    <>
      <PageLayout>
        <PageTitle title="sam local" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SamLocal;
