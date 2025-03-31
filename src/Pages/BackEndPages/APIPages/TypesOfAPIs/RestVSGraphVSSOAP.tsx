import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const RESTVSGraphQLVSSOAP = () => {
    const markdownFilePath = '/BackEndNotes/APINotes/TypesOfAPIs/RESTVSGraphQLVSSOAP.md';

    return (
        <>

            <Header text="REST vs GraphQL vs SOAP" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default RESTVSGraphQLVSSOAP;
