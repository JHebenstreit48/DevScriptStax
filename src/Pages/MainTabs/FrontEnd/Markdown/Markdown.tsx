import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';


const Markdown = () => {
    const markdownFilePath = "/MarkdownNotes/Markdown";

    return (

        <>
            <Header text="Markdown" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

}

export default Markdown;
