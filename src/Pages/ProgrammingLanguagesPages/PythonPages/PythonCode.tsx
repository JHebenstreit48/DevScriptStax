import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const PythonCode = () => {
    const markdownFilePath = "/PythonNotes/PythonCode.md";

    return (

        <>

            <Header text="Python Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );
};

export default PythonCode;
