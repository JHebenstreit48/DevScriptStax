import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";


const Services = () => {
    const markdownFilePath = '/FrontEndNotes/AngularNotes/AngularCoreConcepts/Services.md';

    return (

        <>
            <Header text="Angular Services & Dependency Injection" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Services;
