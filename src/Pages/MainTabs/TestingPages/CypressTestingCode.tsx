import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header";

const CypressCode = () => {
    const markdownFilePath = '/CypressTesting/CypressTestingCode';

    return (

        <>
            <Header text="Cypress Testing Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CypressCode;
