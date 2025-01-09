import CodePageSetup from "@/Components/Notes";
import Header from "@/Components/Header";

const CSSCode = () => {
    const CSSCodeMkdn = '/CSSNotes/CSSCode.md';

    return (

        <>

            <Header text="CSS Code" />
            <CodePageSetup
                filePath={CSSCodeMkdn}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default CSSCode;
