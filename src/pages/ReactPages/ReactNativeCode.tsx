import CodePageSetup from "@/Components/Notes";
import Header from "@/Components/Header";

const ReactNativeCode = () => {
    const markdownFilePath = '/ReactNative/ReactNativeCode.md';

    return (

        <>
            <Header text="React Native Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>
    );

};

export default ReactNativeCode;
