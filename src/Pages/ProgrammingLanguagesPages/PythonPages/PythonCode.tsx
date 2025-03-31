import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

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
