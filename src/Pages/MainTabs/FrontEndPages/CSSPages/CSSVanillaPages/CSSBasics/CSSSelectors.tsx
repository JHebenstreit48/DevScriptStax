import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const CSSSelectors = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/VanillaCSS/CSSBasicsNotes/CSSSelectors';

    return (

        <>
            <Header text="CSS Selectors" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default CSSSelectors;
