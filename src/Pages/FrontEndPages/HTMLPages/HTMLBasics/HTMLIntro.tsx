import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

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
