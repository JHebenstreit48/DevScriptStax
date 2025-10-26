import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExtendAndPlaceholders = () => {
    const markdownFilePath = 'FrontEnd/CSS/Preprocessors/SassNotes/Advanced/ExtendAndPlaceholders';

    return (

        <>
            <Header text="Sass Extend & Placeholders" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default ExtendAndPlaceholders;
