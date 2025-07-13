import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const ApolloServer = () => {
    const markdownFilePath = '/ApolloServerNotes/ApolloServer';

    return (

        <>
            <Header text="Apollo Server" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default ApolloServer;
