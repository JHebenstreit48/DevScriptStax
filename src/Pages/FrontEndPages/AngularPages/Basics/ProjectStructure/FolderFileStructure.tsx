import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const AngularStructure = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularBasics/ProjectStructure/FolderFileStructure.md';

    return (

        <>

            <Header text="Angular Folder & File Structure" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContentCode"
            />

        </>

    );
};

export default AngularStructure;
