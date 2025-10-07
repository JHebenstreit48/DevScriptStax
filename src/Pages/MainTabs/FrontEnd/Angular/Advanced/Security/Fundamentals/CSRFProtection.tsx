import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CSRFProtection = () => {
  const markdownFilePath = 'FrontEndNotes/AngularNotes/Advanced/Security/Fundamentals/CSRFProtection.md';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Security - CSRF Protection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSRFProtection;