import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

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
