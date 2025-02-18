import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Animations = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/Animations.md';

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

export default Animations;
