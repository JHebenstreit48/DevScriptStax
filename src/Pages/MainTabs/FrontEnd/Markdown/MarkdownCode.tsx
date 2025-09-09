import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";


const MarkdownCode = () => {
    const markdownFilePath = '/MarkdownNotes/MarkdownCode';

    return (

        <>
            <Header text="Markdown Code" />
            <Notes filePath={markdownFilePath}
                
            />
        </>
    );

};

export default MarkdownCode;
