import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const HTMLIntro = () => {
    const markdownFilePath = "/FrontEndNotes/HTMLNotes/HTMLBasics/HTMLIntro.md";

    return (

        <>
            <Header text="HTML Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

}

export default HTMLIntro;
