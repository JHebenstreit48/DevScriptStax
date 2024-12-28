import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const PostCSSCode = () => {
    const markdownFilePath = '/PostCSSNotes/PostCSSCode.md';

    return (

        <>

            <Header text="Post CSS Notes Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default PostCSSCode;
