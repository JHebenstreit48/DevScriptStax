import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const ArraysIntro = () => {
    const markdownFilePath = "/FrontEndNotes/JavaScriptNotes/Basics/Arrays/Introduction.md";

    return (

        <>
            <Header text="Arrays Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default ArraysIntro;
