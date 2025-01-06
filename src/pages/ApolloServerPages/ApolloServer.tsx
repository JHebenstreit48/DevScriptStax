import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const ApolloServer = () => {
    const markdownFilePath = '/ApolloServerNotes/ApolloServer.md';

    return (

        <>
           <Header text="Apollo Server" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ApolloServer;
