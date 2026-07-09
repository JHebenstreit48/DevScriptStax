import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BruteForce = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/Security/BruteForce';

  return (
    <>
      <PageLayout>
        <PageTitle title="Brute Force" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BruteForce;
