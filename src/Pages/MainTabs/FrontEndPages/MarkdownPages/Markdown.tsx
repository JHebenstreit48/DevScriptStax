import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';


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
