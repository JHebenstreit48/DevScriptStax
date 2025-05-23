import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Servers = () => {
    const markdownFilePath = '/ServerNotes/Server';

    return (

        <>
            <Header text="Servers" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default Servers;
