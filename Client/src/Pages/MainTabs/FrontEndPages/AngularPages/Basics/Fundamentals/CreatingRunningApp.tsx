import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";


const AngularAppCreate = () => {
    const markdownFilePath = 'FrontEndNotes/AngularNotes/AngularBasics/GettingStarted/CreatingRunning';

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
