import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const HTMLSemantics = () => {
    const markdownFilePath = "FrontEndNotes/HTMLNotes/HTMLBasics/HTMLSemantics";

    return (

        <>
            <Header text="HTML Semantics" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

}

export default HTMLSemantics;
