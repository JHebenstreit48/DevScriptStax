import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Intro = () => {
    const markdownFilePath = "FrontEndNotes/JavaScriptNotes/Basics/Arrays/Introduction";

    return (

        <>
            <Header text="Arrays Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Intro;
