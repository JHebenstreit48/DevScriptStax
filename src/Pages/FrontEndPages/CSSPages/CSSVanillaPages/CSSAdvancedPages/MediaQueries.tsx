import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const MediaQueries = () => {
    const markdownFilePath = '/FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/MediaQueries.md';

    return (

        <>
            <Header text="CSS Media Queries" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default MediaQueries;
