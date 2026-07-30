import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JWTClaims = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Basics/Fundamentals/JWTClaims';

  return (
    <>
      <PageLayout>
        <PageTitle title="JWT / Claims" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JWTClaims;
