import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";
import "@/CSS/NotesTables.css"

const PostCSS = () => {
    const markdownFilePath = '/PostCSSNotes/PostCSS.md';

    return (

        <>
            <Header text="Post CSS" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default PostCSS;
