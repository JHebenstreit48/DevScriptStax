import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const ReactFullStack = () => {
    const markdownFilePath = '/ReactFullStackNotes/ReactFullStack.md';

    return (

        <>
            <Header text="Full-Stack React" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ReactFullStack;
