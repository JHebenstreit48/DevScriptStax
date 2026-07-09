import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
