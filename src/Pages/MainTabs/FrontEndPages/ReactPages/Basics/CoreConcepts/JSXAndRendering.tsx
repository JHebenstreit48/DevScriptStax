import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const JSXAndRendering = () => {
    const markdownFilePath = "FrontEndNotes/ReactNotes/Basics/CoreConcepts/JSXAndRendering";

    return (
        <>
            <PageLayout>
            <Header text="JSX And Rendering" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default JSXAndRendering;
