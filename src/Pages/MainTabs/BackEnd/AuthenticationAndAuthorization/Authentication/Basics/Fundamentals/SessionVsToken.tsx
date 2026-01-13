import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SessionVsToken = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Fundamentals/SessionVsToken';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Session vs Token" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SessionVsToken;
