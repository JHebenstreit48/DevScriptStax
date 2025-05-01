import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const GitCode = () => {
    const markdownFilePath = '/GitNotes/GitCode.md';

    return (

        <>

            <Header text="Git Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default GitCode;
