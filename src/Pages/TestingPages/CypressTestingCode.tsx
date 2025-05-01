import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const CypressCode = () => {
    const markdownFilePath = '/CypressTesting/CypressTestingCode.md';

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
