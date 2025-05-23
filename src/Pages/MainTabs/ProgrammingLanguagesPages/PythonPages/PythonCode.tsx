import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header";

const PythonCode = () => {
    const markdownFilePath = "/PythonNotes/PythonCode";

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
