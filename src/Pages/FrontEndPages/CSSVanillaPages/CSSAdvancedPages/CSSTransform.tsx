import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const CSSTransform = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/CSSTransform.md';

    return (

        <>
            <Header text="CSS Transform" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSSTransform;
