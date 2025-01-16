import Notes from '@/Components/Notes';
import Header from '@/Components/Header';

const GraphQLCode = () => {
    const markdownFilePath = '/GraphQLNotes/GraphQLCode.md';

    return (
        <>

            <Header text="GraphQL Notes Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default GraphQLCode;
