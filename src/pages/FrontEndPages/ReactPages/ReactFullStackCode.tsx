import CodePageSetup from "@/Components/Notes";
import Header from "@/Components/Header";

const ReactFullStackCode = () => {
    const markdownFilePath = '/ReactFullStackNotes/ReactFullStackCode.md';

    return (

        <>

            <Header text="Full-Stack React Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ReactFullStackCode;
