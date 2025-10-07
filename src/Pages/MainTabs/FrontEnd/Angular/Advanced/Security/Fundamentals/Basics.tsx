import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Basics = () => {
  const markdownFilePath = 'FrontEndNotes/AngularNotes/Advanced/Security/Fundamentals/Basics.md';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Security - Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;