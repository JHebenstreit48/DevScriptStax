import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const APIs = () => {
    const markdownFilePath = '/APINotes/API.md';

    return (

        <>
            <Header text="API Notes" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default APIs;
