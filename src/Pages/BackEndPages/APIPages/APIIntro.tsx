import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const APIIntro = () => {
    const markdownFilePath = '/APINotes/API.md';

    return (

        <>
            <Header text="API Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default APIIntro;
