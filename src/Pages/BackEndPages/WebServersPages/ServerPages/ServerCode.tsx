import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const ServerCode = () => {
    const markdownFilePath = '/ServerNotes/SeverCode.md';

    return (
        <>

            <Header text="Server Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default ServerCode;

