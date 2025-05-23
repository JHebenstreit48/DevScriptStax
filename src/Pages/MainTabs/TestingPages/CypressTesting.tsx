import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Cypress = () => {
    const markdownFilePath = '/CypressTesting/CypressTesting';

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
