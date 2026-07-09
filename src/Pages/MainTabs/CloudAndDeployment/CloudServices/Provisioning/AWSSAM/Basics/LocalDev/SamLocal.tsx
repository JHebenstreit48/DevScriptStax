import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
