import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const JavascriptCode = () => {
    const markdownFilePath = "/JavaScriptNotes/JavaScriptCode.md";

    return (

        <>
            <Header text="JavaScript Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />
        </>
    );

};

export default JavascriptCode;
