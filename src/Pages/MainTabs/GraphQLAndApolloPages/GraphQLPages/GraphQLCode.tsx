import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const GraphQLCode = () => {
    const markdownFilePath = '/GraphQLNotes/GraphQLCode';

    return (
        <>

            <Header text="GraphQL Notes Code" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default GraphQLCode;
