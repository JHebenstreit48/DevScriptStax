import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const VueCode = () => {
    const markdownFilePath = '/VueNotes/VueCode.md';

    return (

        <>

            <Header text="Vue Notes Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default VueCode;
