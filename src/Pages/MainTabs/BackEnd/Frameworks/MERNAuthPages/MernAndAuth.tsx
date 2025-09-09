import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const MernAndAuth = () => {
    const markdownFilePath = "/MernAndAuth/MernAndAuth";

    return (

        <>
            <Header text="MERN Stack" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );
}

export default MernAndAuth;
