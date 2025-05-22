import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";


const Markdown = () => {
    const markdownFilePath = "/MarkdownNotes/Markdown";

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
