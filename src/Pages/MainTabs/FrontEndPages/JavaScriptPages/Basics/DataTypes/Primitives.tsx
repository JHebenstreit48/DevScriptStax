import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const JSPrimitives = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/CoreLanguageConcepts/DataTypes";

    return (

        <>
            <Header text="Primitive Data Types" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default JSPrimitives;
