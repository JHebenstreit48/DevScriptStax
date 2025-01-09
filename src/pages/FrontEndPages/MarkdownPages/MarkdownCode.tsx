import CodePageSetup from "@/Components/Notes";
import Header from "@/Components/Header";


const MarkdownCode = () => {
    const markdownFilePath = '/MarkdownNotes/MarkdownCode.md';

    return (

        <>
            <Header text="Markdown Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />
        </>
    );

};

export default MarkdownCode;
