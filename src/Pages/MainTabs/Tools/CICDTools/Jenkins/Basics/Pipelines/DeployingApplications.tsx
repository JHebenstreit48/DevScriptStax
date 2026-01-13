import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeployingApplications = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Pipelines/DeployingApplications';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Deploying Applications" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeployingApplications;
