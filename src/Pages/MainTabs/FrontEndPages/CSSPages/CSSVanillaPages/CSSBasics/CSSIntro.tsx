import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const CSSIntro = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/VanillaCSS/CSSBasicsNotes/CSSIntro';

    return (

        <>
            <Header text="CSS Introduction and Syntax" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default CSSIntro;
