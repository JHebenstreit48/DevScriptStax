import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Transform = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/Transform.md';

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

export default Transform;
