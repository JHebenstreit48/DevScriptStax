import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header";


const MarkdownCode = () => {
    const markdownFilePath = '/MarkdownNotes/MarkdownCode';

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
