import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
