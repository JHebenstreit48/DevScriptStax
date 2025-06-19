import Header from "@/Components/Shared/Header";
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

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
