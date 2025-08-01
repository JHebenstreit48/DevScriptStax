import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Transform = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/Transform';

    return (

        <>
            <Header text="CSS Transform" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default Transform;
