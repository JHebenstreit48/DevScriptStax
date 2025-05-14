import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const AngularFolderFileNaming = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularBasics/ProjectStructure/FolderFileNaming.md';

    return (

        <>

            <Header text="Angular Folder & File Naming" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContentCode"
            />

        </>

    );
};

export default AngularFolderFileNaming;
