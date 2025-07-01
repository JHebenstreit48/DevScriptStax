import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const CSSGrid = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/VanillaCSS/CSSLayoutsNotes/CSSGrid';

    return (

        <>

            <Header text="CSS Grid" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default CSSGrid;
