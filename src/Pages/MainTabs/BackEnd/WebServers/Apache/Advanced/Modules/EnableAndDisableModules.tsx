import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
