import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const Conditionals = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/Conditionals";

    return (

        <>
            <Header text="JavaScript Conditionals" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Conditionals;
