import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const CSSPositioning = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/VanillaCSS/CSSBasicsNotes/CSSPositioning';

    return (

        <>
            <Header text="CSS Positioning" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default CSSPositioning;
