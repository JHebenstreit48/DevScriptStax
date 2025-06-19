import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

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
