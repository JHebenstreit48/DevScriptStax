import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const PropsAndMethods = () => {
    const markdownFilePath = "/FrontEndPages/JavaScriptPages/Basics/ObjectsAndJSON/PropsAndMethods.md";

    return (
        <>
            <Header text="Properties and Methods" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default PropsAndMethods;
