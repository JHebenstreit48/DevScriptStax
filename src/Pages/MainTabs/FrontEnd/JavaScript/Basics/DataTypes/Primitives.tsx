import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';


const Primitives = () => {
    const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/DataTypes/Primitives';

    return (

        <>
            <Header />
            <PageTitle title="JavaScript Primitive Data Types" />
            <Notes filePath={markdownFilePath}
                
            />
        </>
    );

};

export default Primitives;