import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const GraphQL = () => {
    const markdownFilePath = '/GraphQLNotes/GraphQL.md';

    return (

        <>
            <Header text="GraphQL" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default GraphQL;
