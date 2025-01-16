import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const HTML = () => {
    const markdownFilePath = "/HTMLNotes/HTML.md";

    return (

        <>
            <Header text="HTML" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />
        </>
    );

}

export default HTML;
