import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from '@/Components/Shared/Header/Header';

const ConfigFiles = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/ProjectStructure/ConfigurationFiles';

  return (
    <>
      <Header />
      <Notes filePath={markdownFilePath} />
    </>
  );
};

export default ConfigFiles;