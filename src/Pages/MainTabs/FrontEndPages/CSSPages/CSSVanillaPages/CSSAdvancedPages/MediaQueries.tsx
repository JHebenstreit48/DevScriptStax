import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const MediaQueries = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/MediaQueries';

    return (

        <>
            <Header text="CSS Media Queries" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default MediaQueries;
