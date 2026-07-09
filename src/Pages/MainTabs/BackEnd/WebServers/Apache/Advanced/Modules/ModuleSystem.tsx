import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ModuleSystem = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/Modules/ModuleSystem';

  return (
    <>
      <PageLayout>
        <PageTitle title="Module System" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModuleSystem;
