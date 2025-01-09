import Header from "@/Components/Header";
import Notes from "@/Components/Notes";
import "@/CSS/Notes.css"

const Angular = () => {
    const markdownFilePath = '/AngularNotes/Angular.md';

    return (

        <>
            <Header text="Angular" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Angular;
