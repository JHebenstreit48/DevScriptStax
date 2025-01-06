import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const Git = () => {
    const markdownFilePath = '/GitNotes/Git.md';

    return (

        <>
            <Header text="Git Notes"/>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Git;
