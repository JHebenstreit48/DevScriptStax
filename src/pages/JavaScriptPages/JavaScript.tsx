import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const Javascript = () => {
    const markdownFilePath = "/JavaScriptNotes/JavaScript.md";

    return (

        <>
            <Header text="JavaScript" />
            <PageSetup
                filePath={markdownFilePath}
            markdownContent="markdownContent"
            />
        </>
    );

};

export default Javascript;
