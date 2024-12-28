import "../CSS/Header.css";
import "../CSS/NotesTables.css"
import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

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
