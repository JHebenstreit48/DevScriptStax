import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";


const MarkdownCode = () => {
    const markdownFilePath = '/MarkdownNotes/MarkdownCode.md';

    return (

        <>
            <Header text="Markdown Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default MarkdownCode;
