import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const ReactNative = () => {
    const markdownFilePath = '/ReactNative/ReactNative';

    return (

        <>
            <Header text="React Native" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ReactNative;
