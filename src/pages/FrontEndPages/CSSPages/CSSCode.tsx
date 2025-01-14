import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const CSSCode = () => {
    const markdownFilePath = '/CSSNotes/CSSCode.md';

    return (

        <>

            <Header text="CSS Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default CSSCode;
