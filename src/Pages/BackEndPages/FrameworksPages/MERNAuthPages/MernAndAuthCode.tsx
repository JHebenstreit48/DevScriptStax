import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

const MernAndAuthCode = () => {
    const markdownFilePath = '/MernAndAuth/MernAndAuthCode.md';

    return (

        <>

            <Header text="Mern Stack Code" />
            <Notes filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default MernAndAuthCode;
