import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

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
