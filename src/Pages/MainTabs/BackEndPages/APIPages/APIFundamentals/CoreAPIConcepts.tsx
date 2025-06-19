import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const CoreConcepts = () => {
    const markdownFilePath = 'BackEndNotes/APINotes/APIFundamentals/CoreConcepts';

    return (

        <>
            <Header text="Core API Concepts" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default CoreConcepts;
