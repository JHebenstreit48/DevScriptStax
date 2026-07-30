import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const APIKeys = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Methods/APIKeys';

  return (
    <>
      <PageLayout>
        <PageTitle title="API Keys" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIKeys;
