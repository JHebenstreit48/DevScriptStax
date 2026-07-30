import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProjectInit = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/AWSCDK/Basics/Setup/ProjectInit';

  return (
    <>
      <PageLayout>
        <PageTitle title="Project Init" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectInit;
