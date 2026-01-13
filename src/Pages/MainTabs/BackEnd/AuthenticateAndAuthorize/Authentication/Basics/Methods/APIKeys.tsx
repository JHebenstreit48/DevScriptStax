import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIKeys = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Methods/APIKeys';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API Keys" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIKeys;
