import CodePageSetup from "@/Components/Notes";
import Header from "@/Components/Header";

const ReactAndTypeScriptCode = () => {
    const markdownFilePath = '/ReactAndTS/ReactAndTypeScriptCode.md';

    return (

        <>

            <Header text="React + TypeScript Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ReactAndTypeScriptCode;
