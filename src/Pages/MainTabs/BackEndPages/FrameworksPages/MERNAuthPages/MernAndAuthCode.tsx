import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';
import Header from "@/Components/Shared/Header";

const MernAndAuthCode = () => {
    const markdownFilePath = '/MernAndAuth/MernAndAuthCode';

    return (

        <>

            <Header text="Mern Stack Code" />
            <Notes filePath={markdownFilePath}
                
            />

        </>

    );
};

export default MernAndAuthCode;
