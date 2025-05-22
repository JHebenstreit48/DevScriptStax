import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const EventHandle = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Intermediate/DOMAndEvents/EventHandle";

    return (

        <>
            <Header text="JavaScript Event Handling" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default EventHandle;
