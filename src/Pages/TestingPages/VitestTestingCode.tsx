import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

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
