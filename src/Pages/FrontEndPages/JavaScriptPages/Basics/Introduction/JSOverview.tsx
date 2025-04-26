import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const JSOverview = () => {
    const markdownFilePath = "/FrontEndNotes/JavaScriptNotes/Basics/Introduction/Overview.md";

    return (

        <>
            <Header text="JavaScript Overview" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default JSOverview;
