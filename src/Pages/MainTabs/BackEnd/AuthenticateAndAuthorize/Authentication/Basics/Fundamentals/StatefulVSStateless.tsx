import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StatefulVSStateless = () => {
    const markdownFilePath = "BackEndNotes/AuthenAndAuthorNotes/AuthenticationNotes/Basics/Fundamentals/StatefullVSStateless";

    return (
        <>
            <PageLayout>
            <Header />
            <PageTitle title="Authentication Fundamentals - Stateful vs Stateless" />
            <Notes
                filePath={markdownFilePath}
            />
            </PageLayout>
        </>
    );
};

export default StatefulVSStateless;
