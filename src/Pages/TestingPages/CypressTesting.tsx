import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Cypress = () => {
    const markdownFilePath = '/CypressTesting/CypressTesting.md';

    return (

        <>
            <Header text="Cypress" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Cypress;
