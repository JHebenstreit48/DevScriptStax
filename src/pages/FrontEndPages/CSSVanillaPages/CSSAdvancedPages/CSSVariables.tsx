import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const CSSVariables = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/CSSVariables.md';

    return (

        <>
            <Header text="CSS Variables" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSSVariables;
