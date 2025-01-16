import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Cypress = () => {
    const markdownFilePath = '/CypressTesting/CypressTesting.md';

    return (

        <>
            <Header text="Cypress" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>
    );

};

export default Cypress;
