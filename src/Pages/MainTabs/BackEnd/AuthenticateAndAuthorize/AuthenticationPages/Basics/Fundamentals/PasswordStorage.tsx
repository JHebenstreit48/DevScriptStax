import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const PasswordStorage = () => {
    const markdownFilePath = "BackEndNotes/AuthenAndAuthorNotes/AuthenticationNotes/Basics/Fundamentals/PasswordStorage";

    return (
        <>
            <PageLayout>
            <Header text="Password Storage" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default PasswordStorage;
