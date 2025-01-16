import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

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
