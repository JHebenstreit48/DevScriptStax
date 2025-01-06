import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const Typescript = () => {
    const markdownFilePath = '/TypeScriptNotes/TypeScript.md';

    return (

        <>
            <Header text="TypeScript" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Typescript;
