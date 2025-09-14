import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

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
