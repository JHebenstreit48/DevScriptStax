import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const CSSIntro = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSBasicsNotes/CSSIntro.md';

    return (

        <>
            <Header text="CSS Introduction and Syntax" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSSIntro;
