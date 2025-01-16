import Notes from '@/Components/Notes';
import Header from '@/Components/Header';

const ServerCode = () => {
    const markdownFilePath = '/ServerNotes/SeverCode.md';

    return (
        <>

            <Header text="Server Code" />
            <Notes filePath={markdownFilePath}
                markdownContentNotes="markdownContent"
            />

        </>

    );
};

export default ServerCode;

