import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const EventHandling = () => {
    const markdownFilePath = "FrontEndNotes/ReactNotes/Basics/CoreConcepts/EventHandling";

    return (
        <>
            <PageLayout>
            <Header text="Event Handling" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default EventHandling;
