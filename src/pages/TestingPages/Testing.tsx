import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const Testing = () => {
    const markdownFilePath = './TestingNotes/Testing.md';
    return (

        <>
        
            <Header text="Testing" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Testing;
