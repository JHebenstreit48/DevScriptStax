import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const SessionVSToken = () => {
    const markdownFilePath = "BackEndNotes/AuthenAndAuthorNotes/AuthenticationNotes/Basics/Fundamentals/SessionVSToken";

    return (
        <>
            <PageLayout>
            <Header text="Session vs. Token" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default SessionVSToken;
