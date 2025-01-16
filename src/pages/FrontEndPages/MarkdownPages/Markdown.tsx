import Header from "@/Components/Header";
import Notes from "@/Components/Notes";


const Markdown = () => {
    const markdownFilePath = "/MarkdownNotes/Markdown.md";

    return (

        <>
            <Header text="Markdown" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />
        </>
    );

}

export default Markdown;
