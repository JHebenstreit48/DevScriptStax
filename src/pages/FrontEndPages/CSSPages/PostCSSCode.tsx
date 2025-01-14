import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const PostCSSCode = () => {
    const markdownFilePath = '/PostCSSNotes/PostCSSCode.md';

    return (

        <>

            <Header text="Post CSS Notes Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default PostCSSCode;
