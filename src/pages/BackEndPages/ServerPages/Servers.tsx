import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Servers = () => {
    const markdownFilePath = '/ServerNotes/Server.md';

    return (

        <>
            <Header text="Servers" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />
        </>
    );
};

export default Servers;
