import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const ThisKeyword = () => {
    const markdownFilePath = "/FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/ScopeAndContext.md";

    return (

        <>
            <Header text="This Keyword" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default ThisKeyword;
