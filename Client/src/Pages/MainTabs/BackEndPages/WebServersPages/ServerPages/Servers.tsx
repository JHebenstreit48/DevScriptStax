import Header from "@/Components/PageComponents/Header";
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
