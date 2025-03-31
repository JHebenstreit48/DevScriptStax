import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

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
