import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MFA = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Fundamentals/MFA';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="MFA" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MFA;
