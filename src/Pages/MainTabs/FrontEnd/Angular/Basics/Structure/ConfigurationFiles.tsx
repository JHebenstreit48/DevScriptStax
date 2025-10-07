import Notes from "@/Components/PageComponents/Notes/Notes";
import Header from "@/Components/Shared/Header/Header";

const ConfigFiles = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/AngularBasics/ProjectStructure/ConfigurationFiles";

  return (
    <>
      <Header />
      <Notes filePath={markdownFilePath} />
    </>
  );
};

export default ConfigFiles;