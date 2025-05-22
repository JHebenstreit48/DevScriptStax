import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const AngularStructure = () => {
    const markdownFilePath = 'FrontEndNotes/AngularNotes/AngularBasics/ProjectStructure/Structure';

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
