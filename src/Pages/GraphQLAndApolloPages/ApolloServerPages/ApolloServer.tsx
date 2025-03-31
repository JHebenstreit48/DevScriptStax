import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const ApolloServer = () => {
    const markdownFilePath = '/ApolloServerNotes/ApolloServer.md';

    return (

        <>
            <Header text="Apollo Server" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ApolloServer;
