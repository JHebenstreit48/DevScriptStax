import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const SassIntro = () => {
    const markdownFilePath = 'FrontEndNotes/CSSNotes/Preprocessors/SassNotes/GettingStarted/Introduction';

    return (

        <>
            <Header text="Sass Introduction" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default SassIntro;
