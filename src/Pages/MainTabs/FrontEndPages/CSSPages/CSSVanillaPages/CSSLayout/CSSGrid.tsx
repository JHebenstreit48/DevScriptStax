import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";

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
