import CodePageSetup from "@/Components/CodePageSetup";
import Header from "@/Components/Header";

const PythonCode = () => {
    const markdownFilePath = "/PythonNotes/PythonCode.md";

    return (

        <>
        
            <Header text="Python Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>
    );
};

export default PythonCode;
