import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const VitestCode = () => {
    const markdownFilePath = '/VitestNotes/VitestCode.md';

    return (

        <>
            <Header text="Vitest Testing Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default VitestCode;
