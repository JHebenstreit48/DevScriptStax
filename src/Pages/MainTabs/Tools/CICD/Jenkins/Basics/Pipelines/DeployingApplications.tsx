import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeployingApplications = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Pipelines/DeployingApplications';

  return (
    <>
      <PageLayout>
        <PageTitle title="Deploying Applications" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeployingApplications;
