import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const HTMLIntro = () => {
    const markdownFilePath = 'FrontEndNotes/HTMLNotes/Basics/Fundamentals/Introduction';

    return (

        <>
            <Header text="Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

}

export default HTMLIntro;
