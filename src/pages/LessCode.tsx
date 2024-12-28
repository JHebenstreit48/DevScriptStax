import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const LESSCode = () => {
    const markdownFilePath = '/LESSNotes/LESSCode.md';

    return (

        <>

            <Header text="LESS Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default LESSCode;
