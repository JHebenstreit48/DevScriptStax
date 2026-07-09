import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildingAndDeployingApplications = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Basics/Pipelines/BuildingAndDeployingApplications';

  return (
    <>
      <PageLayout>
        <PageTitle title="Building & Deploying Applications" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildingAndDeployingApplications;
