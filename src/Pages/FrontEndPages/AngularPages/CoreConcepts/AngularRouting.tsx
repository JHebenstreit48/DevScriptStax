import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const Routing = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularCoreConcepts/Routing.md';

    return (

        <>
            <Header text="Angular Routing" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Routing;
