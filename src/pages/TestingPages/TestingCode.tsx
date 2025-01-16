import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const TestingCode = () => {
    const markdownFilePath = '/TestingNotes/TestingCode.md';

    return (

        <>

            <Header text="Testing Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default TestingCode;
