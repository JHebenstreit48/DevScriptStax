import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TLSAndAuth = () => {
  const markdownFilePath = 'BackEnd/Databases/Redis/Advanced/SecurityAndOps/TLSAndAuth';

  return (
    <>
      <PageLayout>
        <PageTitle title="TLS & Auth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TLSAndAuth;
