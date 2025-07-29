import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Intro = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/Arrays/Introduction';

    return (

        <>
            <Header text="Introduction" />
            <Notes
                filePath={markdownFilePath}
                
            />
        </>
    );

};

export default Intro;
