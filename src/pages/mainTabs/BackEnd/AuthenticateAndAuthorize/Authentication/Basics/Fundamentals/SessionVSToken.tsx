import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SessionVSToken = () => {
  const markdownFilePath = 'BackEndNotes/AuthenAndAuthorNotes/AuthenticationNotes/Basics/Fundamentals/SessionVSToken';

  return (
    <>
      <PageLayout>
        <PageTitle title="Authentication Fundamentals - Session vs. Token" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SessionVSToken;