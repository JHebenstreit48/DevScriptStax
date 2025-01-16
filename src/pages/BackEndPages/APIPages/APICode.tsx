import Notes from '@/Components/Notes';
import Header from '@/Components/Header';

const APICode = () => {
    const markdownFilePath = '/APINotes/APICode.md';

    return (
        <>

            <Header text="API Notes Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default APICode;
