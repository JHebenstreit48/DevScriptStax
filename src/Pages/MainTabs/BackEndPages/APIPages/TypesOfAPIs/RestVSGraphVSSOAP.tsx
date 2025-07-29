import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";

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
