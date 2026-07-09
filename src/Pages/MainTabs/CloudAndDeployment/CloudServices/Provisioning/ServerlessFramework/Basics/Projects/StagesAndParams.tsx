import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StagesAndParams = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics/Projects/StagesAndParams';

  return (
    <>
      <PageLayout>
        <PageTitle title="Stages & Params" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StagesAndParams;
