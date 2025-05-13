import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const ReactCode = () => {
    const markdownFilePath = '/ReactNotes/ReactCode.md';

    return (

        <>

            <Header text="React Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default ReactCode;
