import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header/Header";

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
