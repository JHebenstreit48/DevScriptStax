import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const CSSFlexbox = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSLayoutsNotes/CSSFlexbox.md';

    return (

        <>
            <Header text="CSS Flexbox" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSSFlexbox;
