import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const CSSTransitionsAndAnimations = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/CSSTransitionsAndAnimations.md';

    return (

        <>
            <Header text="CSS Transitions & Animations" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSSTransitionsAndAnimations;
