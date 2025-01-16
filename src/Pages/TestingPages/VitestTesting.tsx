import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const Vitest = () => {
    const markdownFilePath = '/VitestNotes/Vitest.md';

    return (

        <>
            <Header text="Vitest" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Vitest;
