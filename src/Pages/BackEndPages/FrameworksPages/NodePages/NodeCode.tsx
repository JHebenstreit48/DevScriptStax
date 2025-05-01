import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const NodeCode = () => {
    const markdownFilePath = '/NodeNotes/NodeCode.md';

    return (

        <>

            <Header text="Node JS Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default NodeCode;
