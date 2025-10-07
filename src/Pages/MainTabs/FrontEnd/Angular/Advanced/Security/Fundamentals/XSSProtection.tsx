import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const XSSProtection = () => {
  const markdownFilePath = 'FrontEndNotes/AngularNotes/Advanced/Security/Fundamentals/XSSProtection.md';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Security - XSS Protection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default XSSProtection;