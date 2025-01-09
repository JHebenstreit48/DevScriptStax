import Header from "@/Components/Header";
import Notes from "@/Components/Notes";


const Markdown = () => {
    const markdownFilePath = "/MarkdownNotes/Markdown.md";

    return (

        <>
            <Header text="Markdown" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

}

export default Markdown;
