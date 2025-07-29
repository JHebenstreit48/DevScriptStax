import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import Notes from '@/Components/PageComponents/Notes/Notes';

const StatefulVSStateless = () => {
    const markdownFilePath = "BackEndNotes/AuthenAndAuthorNotes/AuthenticationNotes/Basics/Fundamentals/StatefullVSStateless";

    return (
        <>
            <PageLayout>
            <Header text="Stateful vs. Stateless" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default StatefulVSStateless;
