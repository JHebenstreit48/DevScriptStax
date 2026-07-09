import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
