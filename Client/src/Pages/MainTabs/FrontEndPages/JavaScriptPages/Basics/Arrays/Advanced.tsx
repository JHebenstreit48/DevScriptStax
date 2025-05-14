import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Advanced = () => {
    const markdownFilePath = "/FrontEndNotes/JavaScriptNotes/Basics/Arrays/Advanced.md";

    return (

        <>
            <Header text="Arrays Advanced Techniques" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Advanced;
