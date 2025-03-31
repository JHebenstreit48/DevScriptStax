import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

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
