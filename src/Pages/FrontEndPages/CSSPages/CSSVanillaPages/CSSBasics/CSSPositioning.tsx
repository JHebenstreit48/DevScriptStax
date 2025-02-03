import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const CSSPositioning = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSBasicsNotes/CSSPositioning.md';

    return (

        <>
            <Header text="CSS Positioning" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSSPositioning;
