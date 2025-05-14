import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const HTMLForms = () => {
    const markdownFilePath = "/FrontEndNotes/HTMLNotes/HTMLBasics/HTMLForms.md";

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
