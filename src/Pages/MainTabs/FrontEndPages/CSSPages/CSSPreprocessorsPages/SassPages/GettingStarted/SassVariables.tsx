import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const SassVariables = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Preprocessors/SassNotes/GettingStarted/Variables';

    return (

        <>
            <Header text="Sass Variables and Indentation" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default SassVariables;
