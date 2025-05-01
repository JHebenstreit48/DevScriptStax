import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const LESSCode = () => {
    const markdownFilePath = '/LESSNotes/LESSCode.md';

    return (

        <>

            <Header text="LESS" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default LESSCode;
