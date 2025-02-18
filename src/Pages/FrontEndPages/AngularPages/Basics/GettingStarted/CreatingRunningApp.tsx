import Header from "@/Components/Header";
import Notes from "@/Components/Notes";


const AngularAppCreate = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularBasics/GettingStarted/CreatingRunning.md';

    return (

        <>
            <Header text="Creating & Running An Angular Application" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default AngularAppCreate;
