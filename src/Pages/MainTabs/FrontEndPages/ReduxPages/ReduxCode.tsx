import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const ReduxCode = () => {
    const markdownFilePath = '/ReduxNotes/ReduxCode';

    return (

        <>

            <Header text="Redux Notes Code" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default ReduxCode;
