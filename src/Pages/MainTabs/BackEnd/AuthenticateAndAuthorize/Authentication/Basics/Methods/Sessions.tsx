import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Sessions = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Methods/Sessions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sessions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Sessions;
