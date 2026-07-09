import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ServerAuthAndClaims = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/AdminSDK/ServerAuthAndClaims';

  return (
    <>
      <PageLayout>
        <PageTitle title="Server Auth & Claims" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ServerAuthAndClaims;
