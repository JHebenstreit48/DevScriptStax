import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const Vitest = () => {
    const markdownFilePath = '/VitestNotes/Vitest.md';

    return (

        <>
            <Header text="Vitest" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Vitest;
