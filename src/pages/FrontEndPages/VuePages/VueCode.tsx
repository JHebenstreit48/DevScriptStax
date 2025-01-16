import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const VueCode = () => {
    const markdownFilePath = '/VueNotes/VueCode.md';

    return (

        <>

            <Header text="Vue Notes Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default VueCode;
