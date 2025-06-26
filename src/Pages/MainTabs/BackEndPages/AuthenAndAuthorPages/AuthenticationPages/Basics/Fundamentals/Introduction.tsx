import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const Introduction = () => {
    const markdownFilePath = "BackEndNotes/AuthenAndAuthorNotes/AuthenticationNotes/Basics/Fundamentals/Introduction";

    return (
        <>
            <PageLayout>
            <Header text="Introduction" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default Introduction;
