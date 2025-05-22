import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const MernAndAuth = () => {
    const markdownFilePath = "/MernAndAuth/MernAndAuth";

    return (

        <>
            <Header text="MERN Stack" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );
}

export default MernAndAuth;
