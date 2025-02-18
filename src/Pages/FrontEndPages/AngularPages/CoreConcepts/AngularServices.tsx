import Header from "@/Components/Header";
import Notes from "@/Components/Notes";


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
