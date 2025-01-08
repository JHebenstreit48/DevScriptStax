import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const HTML = () => {
    const markdownFilePath = "/HTMLNotes/HTML.md";

    return (

        <>
            <Header text="HTML" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

}

export default HTML;
