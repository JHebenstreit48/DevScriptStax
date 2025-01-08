import CodePageSetup from "@/Components/Notes";
import Header from "@/Components/Header";

const CypressCode = () => {
    const markdownFilePath = '/CypressTesting/CypressTestingCode.md';

    return (

        <>
            <Header text="Cypress Testing Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>
    );

};

export default CypressCode;
