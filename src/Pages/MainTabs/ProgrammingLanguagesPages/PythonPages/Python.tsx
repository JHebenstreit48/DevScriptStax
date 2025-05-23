import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Python = () => {
    const markdownFilePath = '/PythonNotes/Python';

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
