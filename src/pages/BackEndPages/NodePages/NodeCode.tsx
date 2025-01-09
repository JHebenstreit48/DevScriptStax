import CodePageSetup from "@/Components/Notes";
import Header from "@/Components/Header";

const NodeCode = () => {
    const markdownFilePath = '/NodeNotes/NodeCode.md';

    return (

        <>

            <Header text="Node JS Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default NodeCode;
