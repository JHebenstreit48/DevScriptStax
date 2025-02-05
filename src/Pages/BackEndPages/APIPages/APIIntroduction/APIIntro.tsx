import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const APIIntro = () => {
    const markdownFilePath = '/BackEndNotes/APINotes/APIFundamentals/APIIntro.md';

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
