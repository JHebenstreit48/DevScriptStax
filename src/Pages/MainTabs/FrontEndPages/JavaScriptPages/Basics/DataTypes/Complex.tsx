import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const ComplexDataTypes = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/DataTypes";

    return (

        <>
            <Header text="Complex Types & Type Checking" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default ComplexDataTypes;
