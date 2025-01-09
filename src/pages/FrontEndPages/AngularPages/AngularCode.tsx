import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

const AngularCode = () => {
    const markdownFilePath = '/AngularNotes/AngularCode.md';

    return (

        <>

            <Header text="Angular Notes Code" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContentCode"
            />

        </>

    );
};

export default AngularCode;
