import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';


const AngularAppCreate = () => {
    const markdownFilePath = 'FrontEndNotes/AngularNotes/AngularBasics/GettingStarted/CreatingRunning';

    return (

        <>
            <Header text="Creating & Running An Angular Application" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default AngularAppCreate;
