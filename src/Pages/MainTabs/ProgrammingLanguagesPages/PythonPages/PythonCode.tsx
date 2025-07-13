import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from "@/Components/Shared/Header";

const PythonCode = () => {
    const markdownFilePath = '/PythonNotes/PythonCode';

    return (

        <>

            <Header text="Python Code" />
            <Notes filePath={markdownFilePath}
                
            />

        </>
    );
};

export default PythonCode;
