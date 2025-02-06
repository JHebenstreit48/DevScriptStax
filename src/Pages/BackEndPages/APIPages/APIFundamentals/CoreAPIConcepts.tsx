import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const CoreConcepts = () => {
    const markdownFilePath = '/BackEndNotes/APINotes/APIFundamentals/CoreConcepts.md';

    return (

        <>
            <Header text="Core API Concepts" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default CoreConcepts;
