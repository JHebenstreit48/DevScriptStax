import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Servers = () => {
    const markdownFilePath = '/ServerNotes/Server';

    return (

        <>
            <Header text="Servers" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );
};

export default Servers;
