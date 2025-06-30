import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";


const Elements = () => {
    const markdownFilePath = 'FrontEndNotes/HTMLNotes/Basics/Structure/Elements';

    return (

        <>
            <Header text="Elements" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Elements;
