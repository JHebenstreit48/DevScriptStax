import Notes from "@/Components/Notes";
import Header from "@/Components/Header";


const HTMLCode = () => {
    const markdownFilePath = '/HTMLNotes/HTMLCode.md';

    return (

        <>
            <Header text="HTML Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />
        </>
    );

};

export default HTMLCode;
