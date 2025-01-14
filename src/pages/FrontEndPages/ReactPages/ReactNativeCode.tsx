import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const ReactNativeCode = () => {
    const markdownFilePath = '/ReactNative/ReactNativeCode.md';

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
