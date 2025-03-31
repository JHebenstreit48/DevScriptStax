import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

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
