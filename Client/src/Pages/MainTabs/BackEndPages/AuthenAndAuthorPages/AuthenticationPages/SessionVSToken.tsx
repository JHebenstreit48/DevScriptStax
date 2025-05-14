import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ServerVSToken = () => {
    const markdownFilePath = 'BackEndNotes//AuthenAndAuthorNotes/AuthenticationNotes/ServerVSToken';

    return (

        <>
            <Header text="Server vs Token" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ServerVSToken;
