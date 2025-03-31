import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

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
