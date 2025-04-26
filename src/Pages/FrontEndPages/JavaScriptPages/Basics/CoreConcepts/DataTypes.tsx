import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const DataTypes = () => {
    const markdownFilePath = "/FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/DataTypes.md";

    return (

        <>
            <Header text="JavaScript Data Types" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default DataTypes;
