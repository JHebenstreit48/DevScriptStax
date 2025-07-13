import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Transitions = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/VanillaCSS/CSSAdvancedNotes/Transitions';

    return (

        <>
            <Header text="CSS Transitions" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default Transitions;
