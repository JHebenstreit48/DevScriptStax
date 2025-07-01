import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';


const CreateRun = () => {
    const markdownFilePath = 'FrontEndNotes/AngularNotes/AngularBasics/GettingStarted/CreatingRunning';

    return (

        <>
            <Header text="Creating/Running App" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default CreateRun;
