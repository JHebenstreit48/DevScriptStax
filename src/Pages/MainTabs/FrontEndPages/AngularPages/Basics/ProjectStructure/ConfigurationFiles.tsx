import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const AngularConfigFiles = () => {
    const markdownFilePath = 'FrontEndNotes/AngularNotes/AngularBasics/ProjectStructure/ConfigurationFiles';

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
