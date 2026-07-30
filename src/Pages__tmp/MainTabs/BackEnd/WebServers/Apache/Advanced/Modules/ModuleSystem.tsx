import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
