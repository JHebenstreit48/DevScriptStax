import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const Python = () => {
    const markdownFilePath = '/PythonNotes/Python';

    return (

        <>

            <Header text="Python" />
            <Notes
                filePath={markdownFilePath}
                
            />

        </>
    );

};

export default Python;
