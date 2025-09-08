import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const ServerVSToken = () => {
    const markdownFilePath = 'BackEndNotes//AuthenAndAuthorNotes/AuthenticationNotes/ServerVSToken';

    return (

        <>
            <Header text="Server vs Token" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default ServerVSToken;
