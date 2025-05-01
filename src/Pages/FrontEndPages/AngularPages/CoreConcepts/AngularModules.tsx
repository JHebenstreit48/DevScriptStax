import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";


const Modules = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularCoreConcepts/Modules.md';

    return (

        <>
            <Header text="Angular Modules" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Modules;
