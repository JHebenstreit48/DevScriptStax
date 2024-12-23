import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const ReactAndTypeScript = () => {
    const markdownFilePath = "/ReactAndTS/ReactAndTypeScript.md";

    return (

        <>
            <Header text="React + TypeScript" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ReactAndTypeScript;
