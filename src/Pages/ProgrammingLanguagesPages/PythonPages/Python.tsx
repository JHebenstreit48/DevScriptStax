import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

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
