import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
