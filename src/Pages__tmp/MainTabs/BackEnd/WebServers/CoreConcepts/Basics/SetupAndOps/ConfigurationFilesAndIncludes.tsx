import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ConfigurationFilesAndIncludes = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Basics/SetupAndOps/ConfigurationFilesAndIncludes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Configuration Files & Includes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigurationFilesAndIncludes;
