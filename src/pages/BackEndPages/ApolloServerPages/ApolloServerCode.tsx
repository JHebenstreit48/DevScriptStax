import Notes from '@/Components/Notes';
import Header from '@/Components/Header';

const ApolloServerCode = () => {
    const markdownFilePath = '/ApolloServerNotes/ApolloServerCode.md';

    return (
        <>

            <Header text="Apollo Server Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default ApolloServerCode;
