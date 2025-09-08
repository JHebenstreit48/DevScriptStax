import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const GraphQL = () => {
    const markdownFilePath = '/GraphQLNotes/GraphQL';

    return (

        <>
            <Header text="GraphQL" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default GraphQL;
