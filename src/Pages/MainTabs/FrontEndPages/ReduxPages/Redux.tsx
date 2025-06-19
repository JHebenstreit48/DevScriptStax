import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Redux = () => {
    const markdownFilePath = '/ReduxNotes/Redux';

    return (

        <>
            <Header text="Redux" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Redux;
