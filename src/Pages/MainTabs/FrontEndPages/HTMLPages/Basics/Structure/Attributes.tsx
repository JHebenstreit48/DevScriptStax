import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Attributes = () => {
    const markdownFilePath = 'FrontEndNotes/HTMLNotes/HTMLBasics/HTMLAttributes';

    return (

        <>
            <Header text="HTML Attributes" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

}

export default Attributes;
