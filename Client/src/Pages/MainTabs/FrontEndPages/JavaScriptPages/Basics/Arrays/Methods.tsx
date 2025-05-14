import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Methods = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/Arrays/Methods";

    return (

        <>
            <Header text="Arrays Methods" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Methods;
