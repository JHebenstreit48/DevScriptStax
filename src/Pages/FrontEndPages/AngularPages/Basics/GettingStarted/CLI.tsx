import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const AngularCLI = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularBasics/GettingStarted/CLI.md';

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
