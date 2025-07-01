import Notes from "@/Components/PageComponents/Notes/NotesRendering/Notes";
import Header from "@/Components/Shared/Header";

const ConfigFiles = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/AngularBasics/ProjectStructure/ConfigurationFiles";

  return (
    <>
      <Header text="Configuration Files" />
      <Notes filePath={markdownFilePath} />
    </>
  );
};

export default ConfigFiles;