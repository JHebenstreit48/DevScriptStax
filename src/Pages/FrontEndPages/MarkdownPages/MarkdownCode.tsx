import Notes from "@/Components/Notes";
import Header from "@/Components/Header";


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
