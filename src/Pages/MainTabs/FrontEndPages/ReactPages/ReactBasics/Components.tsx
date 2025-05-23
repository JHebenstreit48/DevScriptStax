import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header";

const ReactCode = () => {
    const markdownFilePath = '/ReactNotes/ReactCode';

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
