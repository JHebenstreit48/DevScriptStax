import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const CSSBoxModel = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/VanillaCSS/CSSBasicsNotes/CSSBoxModel';

    return (

        <>
            <Header text="CSS Box Model" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default CSSBoxModel;
