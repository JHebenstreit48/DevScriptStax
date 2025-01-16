import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const CSSAnimations = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/CSSAnimations.md';

    return (

        <>
            <Header text="CSS Animations" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSSAnimations;
