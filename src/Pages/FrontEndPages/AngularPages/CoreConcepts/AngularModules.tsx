import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";


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
