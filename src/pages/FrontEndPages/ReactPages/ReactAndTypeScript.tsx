import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const ReactAndTypeScript = () => {
    const markdownFilePath = "/ReactAndTS/ReactAndTypeScript.md";

    return (

        <>
            <Header text="React + TypeScript" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ReactAndTypeScript;
