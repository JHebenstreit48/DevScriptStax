import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const AngularStructure = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularBasics/AngularStructure.md';

    return (

        <>

            <Header text="Angular Project Structure" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContentCode"
            />

        </>

    );
};

export default AngularStructure;
