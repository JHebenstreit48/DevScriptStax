import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Javascript = () => {
    const markdownFilePath = "/JavaScriptNotes/JavaScript.md";

    return (

        <>
            <Header text="JavaScript" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />
        </>
    );

};

export default Javascript;
