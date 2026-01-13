import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConfigurationFilesAndIncludes = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Basics/SetupAndOps/ConfigurationFilesAndIncludes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Configuration Files & Includes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigurationFilesAndIncludes;
