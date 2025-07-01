import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const EventHandle = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Intermediate/DOMAndEvents/EventHandle';

    return (

        <>
            <Header text="JavaScript Event Handling" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default EventHandle;
