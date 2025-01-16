import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const HTMLSemantics = () => {
    const markdownFilePath = "/FrontEndNotes/HTMLNotes/HTMLBasics/HTMLSemantics.md";

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
