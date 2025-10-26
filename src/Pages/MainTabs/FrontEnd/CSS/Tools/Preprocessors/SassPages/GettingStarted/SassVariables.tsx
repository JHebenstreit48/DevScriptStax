import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const SassVariables = () => {
    const markdownFilePath = 'FrontEnd/CSS/Preprocessors/SassNotes/GettingStarted/Variables';

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
