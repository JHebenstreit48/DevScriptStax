import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const CSSMediaQueries = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/CSSMediaQueries.md';

    return (

        <>
            <Header text="CSS Media Queries" />
            <Notes
                filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>
    );

};

export default CSSMediaQueries;
