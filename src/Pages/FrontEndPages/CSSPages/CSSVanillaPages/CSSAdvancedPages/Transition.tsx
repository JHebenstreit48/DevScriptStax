import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Transitions = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/Transitions.md';

    return (

        <>
            <Header text="CSS Transitions" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Transitions;
