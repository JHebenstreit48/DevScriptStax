import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const PostCSS = () => {
    const markdownFilePath = '/PostCSSNotes/PostCSS.md';

    return (

        <>
            <Header text="Post CSS" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default PostCSS;
