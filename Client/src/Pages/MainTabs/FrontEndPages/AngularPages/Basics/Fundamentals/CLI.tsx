import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const AngularCLI = () => {
    const markdownFilePath = 'FrontEndNotes/AngularNotes/AngularBasics/GettingStarted/CLI';

    return (

        <>

            <Header text="Angular CLI" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContentCode"
            />

        </>

    );
};

export default AngularCLI;
