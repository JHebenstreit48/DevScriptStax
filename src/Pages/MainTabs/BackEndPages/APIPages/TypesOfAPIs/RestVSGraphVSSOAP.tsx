import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const RESTVSGraphQLVSSOAP = () => {
    const markdownFilePath = 'BackEndNotes//APINotes/TypesOfAPIs/RESTVSGraphQLVSSOAP';

    return (
        <>

            <Header text="REST vs GraphQL vs SOAP" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default RESTVSGraphQLVSSOAP;
