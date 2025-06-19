import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const NodeCode = () => {
    const markdownFilePath = '/NodeNotes/NodeCode';

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
