import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const RESTVSGraphQLVSSOAP = () => {
    const markdownFilePath = 'BackEndNotes//APINotes/TypesOfAPIs/RESTVSGraphQLVSSOAP';

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
