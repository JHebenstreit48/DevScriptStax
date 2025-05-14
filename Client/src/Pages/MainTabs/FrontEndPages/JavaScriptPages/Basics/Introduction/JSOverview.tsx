import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const JSOverview = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/Introduction/Overview";

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
