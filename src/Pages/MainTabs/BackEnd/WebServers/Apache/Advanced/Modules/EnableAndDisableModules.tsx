import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnableAndDisableModules = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/Modules/EnableAndDisableModules';

  return (
    <>
      <PageLayout>
        <PageTitle title="Enable & Disable Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnableAndDisableModules;
