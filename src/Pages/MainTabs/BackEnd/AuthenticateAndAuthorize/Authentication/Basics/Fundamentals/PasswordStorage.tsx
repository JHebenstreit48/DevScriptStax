import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PasswordStorage = () => {
  const markdownFilePath = 'BackEndNotes/AuthenAndAuthorNotes/AuthenticationNotes/Basics/Fundamentals/PasswordStorage';

  return (
    <>
      <PageLayout>
        <PageTitle title="Authentication Fundamentals - Password Storage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PasswordStorage;