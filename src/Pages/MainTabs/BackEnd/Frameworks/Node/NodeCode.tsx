import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";

const NodeCode = () => {
    const markdownFilePath = '/NodeNotes/NodeCode';

    return (

        <>

            <Header text="Node JS Code" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default NodeCode;
