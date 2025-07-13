import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header";

const ApolloServerCode = () => {
    const markdownFilePath = '/ApolloServerNotes/ApolloServerCode';

    return (
        <>

            <Header text="Apollo Server Code" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default ApolloServerCode;
