import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const CSSFlexbox = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/VanillaCSS/CSSLayoutsNotes/CSSFlexbox';

    return (

        <>
            <Header text="CSS Flexbox" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default CSSFlexbox;
