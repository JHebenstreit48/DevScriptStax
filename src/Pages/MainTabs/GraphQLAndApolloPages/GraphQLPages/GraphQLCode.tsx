import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header";

const GraphQLCode = () => {
    const markdownFilePath = '/GraphQLNotes/GraphQLCode';

    return (
        <>

            <Header text="GraphQL Notes Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default GraphQLCode;
