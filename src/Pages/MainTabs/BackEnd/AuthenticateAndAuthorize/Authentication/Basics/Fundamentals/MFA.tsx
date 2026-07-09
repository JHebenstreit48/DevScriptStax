import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MFA = () => {
  const markdownFilePath = 'BackEndNotes/AuthenAndAuthorNotes/AuthenticationNotes/Basics/Fundamentals/MFA';

  return (
    <>
      <PageLayout>
        <PageTitle title="Authentication Fundamentals - Multifactor Authentication (MFA)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MFA;