import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const JavascriptCode = () => {
    const markdownFilePath = "/JavaScriptNotes/JavaScriptCode.md";

    return (

        <>
            <Header text="JavaScript Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default JavascriptCode;
