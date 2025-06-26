import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const HTMLForms = () => {
    const markdownFilePath = "FrontEndNotes/HTMLNotes/HTMLBasics/HTMLForms";

    return (

        <>
            <Header text="HTML Forms" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

}

export default HTMLForms;
