import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const AngularConfigFiles = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularBasics/ProjectStructure/ConfigurationFiles.md';

    return (

        <>

            <Header text="Angular Configuration Files" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContentCode"
            />

        </>

    );
};

export default AngularConfigFiles;
