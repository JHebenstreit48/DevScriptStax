import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const CSSVariables = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/Variables';

    return (

        <>
            <Header text="CSS Variables" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default CSSVariables;
