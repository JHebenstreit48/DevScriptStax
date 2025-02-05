import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const ServerVSToken = () => {
    const markdownFilePath = '/BackEndNotes/AuthenAndAuthorNotes/AuthenticationNotes/ServerVSToken.md';

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
