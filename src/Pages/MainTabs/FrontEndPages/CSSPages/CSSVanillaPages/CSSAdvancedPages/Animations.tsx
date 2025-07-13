import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Animations = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/Animations';

    return (

        <>
            <Header text="CSS Animations" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default Animations;
