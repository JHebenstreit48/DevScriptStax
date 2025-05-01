import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Python = () => {
    const markdownFilePath = '/PythonNotes/Python.md';

    return (

        <>

            <Header text="Python" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Python;
