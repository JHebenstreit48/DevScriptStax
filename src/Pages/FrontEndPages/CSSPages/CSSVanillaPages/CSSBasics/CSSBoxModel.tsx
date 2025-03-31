import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const CSSBoxModel = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSBasicsNotes/CSSBoxModel.md';

    return (

        <>
            <Header text="CSS Box Model" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSSBoxModel;
