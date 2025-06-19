import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const HTMLAttributes = () => {
    const markdownFilePath = "FrontEndNotes/HTMLNotes/HTMLBasics/HTMLAttributes";

    return (

        <>
            <Header text="HTML Attributes" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

}

export default HTMLAttributes;
