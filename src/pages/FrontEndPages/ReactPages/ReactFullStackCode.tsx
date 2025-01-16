import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const ReactFullStackCode = () => {
    const markdownFilePath = '/ReactFullStackNotes/ReactFullStackCode.md';

    return (

        <>

            <Header text="Full-Stack React Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default ReactFullStackCode;
