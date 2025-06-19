import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Vue = () => {
    const markdownFilePath = '/VueNotes/Vue';

    return (

        <>
            <Header text="Vue" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Vue;
