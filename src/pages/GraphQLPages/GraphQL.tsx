import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const GraphQL = () => {
    const markdownFilePath = '/GraphQLNotes/GraphQL.md';

    return (

        <>
           <Header text="GraphQL" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default GraphQL;
