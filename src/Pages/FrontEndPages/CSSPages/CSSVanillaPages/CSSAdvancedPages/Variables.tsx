import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Variables = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/Variables.md';

    return (

        <>
            <Header text="Variables" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Variables;
