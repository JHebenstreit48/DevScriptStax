import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const ScopeAndContext = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/ScopeAndContext";

    return (

        <>
            <Header text="Scope And Context" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default ScopeAndContext;
