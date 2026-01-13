import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProjectInit = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Setup/ProjectInit';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Project Init" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectInit;
