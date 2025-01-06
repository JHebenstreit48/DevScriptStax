import Header from "@/Components/Header";
import PageSetup from "@/Components/PageSetup";

const APIs = () => {
    const markdownFilePath = '/APINotes/API.md';

    return (

        <>
            <Header text="API Notes" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default APIs;
