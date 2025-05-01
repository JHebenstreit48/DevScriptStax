import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const HTMLAttributes = () => {
    const markdownFilePath = "/FrontEndNotes/HTMLNotes/HTMLBasics/HTMLAttributes.md";

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
