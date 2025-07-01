import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Typescript = () => {
    const markdownFilePath = '/TypeScriptNotes/TypeScript';

    return (

        <>
            <Header text="TypeScript" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default Typescript;
