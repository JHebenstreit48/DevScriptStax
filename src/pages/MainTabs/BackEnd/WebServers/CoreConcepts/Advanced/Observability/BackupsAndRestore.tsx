import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BackupsAndRestore = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/Observability/BackupsAndRestore';

  return (
    <>
      <PageLayout>
        <PageTitle title="Backups & Restore" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BackupsAndRestore;
