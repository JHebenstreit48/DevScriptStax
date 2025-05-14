import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const TestingCode = () => {
    const markdownFilePath = '/TestingNotes/TestingCode';

    return (

        <>

            <Header text="Testing Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default TestingCode;
