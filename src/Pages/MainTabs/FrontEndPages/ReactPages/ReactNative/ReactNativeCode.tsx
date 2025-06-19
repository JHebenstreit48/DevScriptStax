import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const ReactNativeCode = () => {
    const markdownFilePath = '/ReactNative/ReactNativeCode';

    return (

        <>
            <Header text="React Native Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ReactNativeCode;
