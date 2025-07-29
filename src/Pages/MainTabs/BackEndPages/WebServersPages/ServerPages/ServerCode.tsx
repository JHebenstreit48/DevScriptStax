import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";

const ServerCode = () => {
    const markdownFilePath = '/ServerNotes/SeverCode';

    return (
        <>

            <Header text="Server Code" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default ServerCode;

