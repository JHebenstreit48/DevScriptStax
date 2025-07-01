import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Arrow = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/FunctionsNotes/Arrow';

    return (
        <>
            <Header text="Arrow" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );
};

export default Arrow;
