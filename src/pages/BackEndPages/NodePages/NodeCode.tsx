import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

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
