import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const TypeScriptCode = () => {
    const markdownFilePath = '/TypeScriptNotes/TypeScriptCode';

    return (

        <>

            <Header text="TypeScript Code" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default TypeScriptCode;
