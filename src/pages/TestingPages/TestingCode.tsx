import CodePageSetup from "@/Components/Notes";
import Header from "@/Components/Header";

const TestingCode = () => {
    const markdownFilePath = '/TestingNotes/TestingCode.md';

    return (

        <>

            <Header text="Testing Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default TestingCode;
