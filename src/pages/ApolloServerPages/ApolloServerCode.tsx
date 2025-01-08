import CodePageSetup from '@/Components/Notes';
import Header from '@/Components/Header';

const ApolloServerCode = () => {
    const markdownFilePath = '/ApolloServerNotes/ApolloServerCode.md';

    return (
        <>

            <Header text="Apollo Server Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ApolloServerCode;
