import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MFA = () => {
  const markdownFilePath = 'BackEndNotes/AuthenAndAuthorNotes/AuthenticationNotes/Basics/Fundamentals/MFA';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Authentication Fundamentals - Multifactor Authentication (MFA)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MFA;