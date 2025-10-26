import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const MixinsAndFunctions = () => {
    const markdownFilePath = 'FrontEnd/CSS/Preprocessors/SassNotes/GettingStarted/MixinsAndFunctions';

    return (

        <>
            <Header text="Sass Mixins & Functions" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default MixinsAndFunctions;
