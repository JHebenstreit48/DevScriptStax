import CodePageSetup from "@/Components/CodePageSetup";
import Header from "@/Components/Header";

const GitCode = () => {
    const markdownFilePath = '/GitNotes/GitCode.md';

    return (

        <>

            <Header text="Git Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default GitCode;
