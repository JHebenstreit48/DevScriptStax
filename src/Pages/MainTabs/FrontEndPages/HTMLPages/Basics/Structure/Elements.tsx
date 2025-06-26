import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";


const HTMLElements = () => {
    const markdownFilePath = 'FrontEndNotes/HTMLNotes/HTMLBasics/HTMLElements';

    return (

        <>
            <Header text="HTML Elements" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default HTMLElements;
