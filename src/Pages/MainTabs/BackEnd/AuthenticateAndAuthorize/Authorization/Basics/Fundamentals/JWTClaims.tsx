import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JWTClaims = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Basics/Fundamentals/JWTClaims';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JWT / Claims" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JWTClaims;
